import React, { useEffect, useRef, useState } from "react";
import { notification, Select } from 'antd';
import ReCAPTCHA from "react-google-recaptcha";
import { API_ENDPOINT } from "constants";
import DownArrow from '../../assets/accordion-close.png';
import { apiClientContentFul } from "services/apiClient";

const { Option } = Select;

const ContactUsForm = () => {
  const [formValues, setFormValues] = useState(null);
  const [subjectTitle, setSubjectTitle] = useState(null);
  const [email, setEmail] = useState(null);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Add state for selected option
  const [selectError, setSelectError] = useState(false); // Add state for validation error
  const recaptchaRef = useRef(null);

  const handleChangeSelect = (value) => {
    const { title, email } = JSON.parse(value);
    setSubjectTitle(title);
    setEmail(email);
    setSelectedOption(value); // Update the selected option
    setSelectError(false); // Reset the validation error when an option is selected
  };

  useEffect(() => {
    apiClientContentFul("contactUsSubjectDropdown").then((res) => {
      setFormValues(
        res?.items?.map((item) => {
          return {
            ...item.fields,
            id: item?.sys?.id,
          };
        })
      );
    });
  }, []);

  const onChangeRecaptcha = (value) => {
    setRecaptchaValue(value);
  }

  const submit = async (e) => {
    e.preventDefault();

    // Validate the Select component
    if (!selectedOption) {
      setSelectError(true);
      return notification.error({
        message: 'Error',
        description: `Please choose a subject`,
      });
    }
    if (!recaptchaValue) {
    return notification.error({
    message: 'Error',
    description: `Please select the ReCaptcha field to prove that you're not a robot`
    });
    }
    try {
      const abortController = new AbortController();
      const { signal } = abortController;

      const timeoutId = setTimeout(() => {
        abortController.abort();
        notification.error({
          message: 'Error',
          description: `Request timed out. Please try after a few moments`
        });
      }, 30000);

      const apiCallPromise = fetch(
        `https://apiv1.paaq.app/v1/sendemail`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: e.target[0]?.value,
          subject: subjectTitle,
          recipient: email,
          email: e.target[1]?.value,
          message: e.target[3]?.value
        }),
        signal,
      });

      const res = await apiCallPromise;

      clearTimeout(timeoutId);

      if (res.status === 200) {
        notification.success({
          message: 'Email Sent',
          description: 'Your message has been successfully sent to PAAQ Team.',
        });

        // Empty the form Fields
        e.target[0].value = ""
        setSubjectTitle(null)
        setEmail("")
        e.target[1].value = ""
        e.target[3].value = ""


      } else {
        notification.error({
          message: 'Error',
          description: `Couldn't reach PAAQ at the moment. Please try after a few moments`
        });
      }
    } catch (err) {
      console.error(err);
      if (err.name !== 'AbortError') {
        notification.error({
          message: 'Error',
          description: `Couldn't reach PAAQ at the moment. Please try after a few moments`
        });
      }
    }
  };

  return (
    <div className="contact-us-page-form-container">
      <form onSubmit={submit}>
        <div className="input-with-label">
          <label className="contact_us_color">Name*</label>
          <input name="name" placeholder="Enter your name" required />
        </div>
        <div className="input-with-label">
          <label className="contact_us_color">Email*</label>
          <input name="email" type="email" placeholder="example@gmail.com" required />
        </div>
        <div className="input-with-label">
          <label className="contact_us_color">Subject*</label>
          <Select
            bordered={false}
            suffixIcon={<div className="arrowDown"><img src={DownArrow} /></div>}
            placeholder={<div className="placeholderText">Choose the reason</div>}
            className={`select form-select-dropdown${selectError ? ' select-error' : ''}`}
            onChange={handleChangeSelect}
            dropdownStyle={{ padding: '1rem', borderRadius: '1rem' }}
            value={subjectTitle}
          >
            {formValues ? formValues.map((item) => (
              <Option key={item.id} value={`{"title":"${item.title}", "email":"${item.email}"}`}>{item.title}</Option>
            )) : null
            }
          </Select>
          {selectError && (
            <div className="error-message">Please choose a subject</div>
          )}
        </div>
        <div className="input-with-label">
          <label className="contact_us_color">Message*</label>
          <textarea placeholder="Write your Message" required />
        </div>
        <div className="recaptcha-field">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdBmSEpAAAAADBV9TV_g_dsuERoO97q8DkL0B_m"
            onChange={onChangeRecaptcha}
          />
        </div>
        <input className="submit-btn" type="submit" value="Send message" />
      </form>
    </div>
  );
};

export default ContactUsForm;
