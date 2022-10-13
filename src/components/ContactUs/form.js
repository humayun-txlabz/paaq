import React from "react";
import { Select } from "antd";
const { Option } = Select;
import DownArrow from '../../assets/accordion-close.png';

const handleChangeSelect = (value) => {
  console.log(`selected ${value}`);
};
const ContactUsForm = () => {
  return (
    <div className="contact-us-page-form-container">
      <form>
        <div className="input-with-label">
          <label>Name</label>
          <input placeholder="Enter your name" />
        </div>
        <div className="input-with-label">
          <label>Email*</label>
          <input placeholder="Enter your name" />
        </div>
        <div className="input-with-label">
          <label>Subject</label>
          <Select
            bordered={false}
            suffixIcon={<div className="arrowDown"><img src={DownArrow} /></div>}
            placeholder={<div className="placeholderText">Choose the reason</div>}
            className="select"
            onChange={handleChangeSelect}
            dropdownStyle={{padding: '1rem', borderRadius: '1rem' }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className="input-with-label">
          <label>Message</label>
          <textarea placeholder="Enter your name" />
        </div>
        <div className="submit-btn">Send message</div>
      </form>
    </div>
  );
};

export default ContactUsForm;
