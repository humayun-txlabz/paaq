import React, { useEffect, useRef, useState } from "react";
import { Select } from "antd";
const { Option } = Select;
import DownArrow from '../../assets/accordion-close.png';
import { apiClientContentFul } from "services/apiClient";
import ReCAPTCHA from "react-google-recaptcha";

const handleChangeSelect = (value) => {
  console.log(`selected ${value}`);
};


const ContactUsForm = () => {
  const [formValues, setFormValues] = useState(null);
  const recaptchaRef = useRef(null);

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

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <div className="contact-us-page-form-container">
      <form>
        <div className="input-with-label">
          <label>Name*</label>
          <input placeholder="Enter your name" required />
        </div>
        <div className="input-with-label">
          <label>Email*</label>
          <input type="email" placeholder="Enter your name" required />
        </div>
        <div className="input-with-label">
          <label>Subject*</label>
          <Select
            bordered={false}
            suffixIcon={<div className="arrowDown"><img src={DownArrow} /></div>}
            placeholder={<div className="placeholderText">Choose the reason</div>}
            className="select form-select-dropdown"
            onChange={handleChangeSelect}
            dropdownStyle={{padding: '1rem', borderRadius: '1rem' }}
          >
            {formValues ? formValues.map((item)=>(
              <Option value={item.title}>{item.title}</Option>

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
            sitekey="6Ldt4pcjAAAAAJTTQkkYGkBeftpLFaIC1JNrsIcs"
            onChange={onChange}
          />
          <input className="submit-btn" type="submit" value="Send message" />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
