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
  const recaptchaRef = useRef(null);


  const handleChangeSelect = (value) => {
    const { title, email } = JSON.parse(value);
    setSubjectTitle(title);
    setEmail(email);
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
    if (!recaptchaValue) {
      return notification.error({
        message: 'Error',
        description: `Please select the ReCaptcha field to prove that you're not a robot`
      });
    }
    try {
      const res = await fetch(
        `${API_ENDPOINT}/sendemail`, {
        method: 'POST',
        // mode: 'cors', // this cannot be 'no-cors'
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
        })
      }
      );
      if (res.status === 200) {
        notification.success({
          message: 'Email Sent',
          description:
            'Your message has been successfully sent to PAAQ Team.',
        });
      } else {
        notification.error({
          message: 'Error',
          description: `Couldn't reach to PAAQ at the moment. Please try after few moments`
        });
      }
    } catch (err) {
      console.log(err);
      notification.error({
        message: 'Error',
        description: `Couldn't reach to PAAQ at the moment. Please try after few moments`
      });
    }

  }

  return (
    <div className="contact-us-page-form-container">
      <form onSubmit={submit}>
        <div className="input-with-label">
          <label>Name*</label>
          <input name="name" placeholder="Enter your name" required />
        </div>
        <div className="input-with-label">
          <label>Email*</label>
          <input name="email" type="email" placeholder="Enter your name" required />
        </div>
        <div className="input-with-label">
          <label>Subject*</label>
          <Select
            bordered={false}
            suffixIcon={<div className="arrowDown"><img src={DownArrow} /></div>}
            placeholder={<div className="placeholderText">Choose the reason</div>}
            className="select form-select-dropdown"
            onChange={handleChangeSelect}
            dropdownStyle={{ padding: '1rem', borderRadius: '1rem' }}
          >
            {formValues ? formValues.map((item) => (
              <Option value={`{"title":"${item.title}", "email":"${item.email}"}`}>{item.title}</Option>
            )) : null
            }
          </Select>
        </div>
        <div className="input-with-label">
          <label>Message*</label>
          <textarea placeholder="Enter your name" required />
        </div>
        <div className="recaptcha-field">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeqHswoAAAAAMdLvI_qL3dN8G7RTlKWYbJMHIr3"
            onChange={onChangeRecaptcha}
          />
        </div>
        <input className="submit-btn" type="submit" value="Send message" />
      </form>
    </div>
  );
};

export default ContactUsForm;
