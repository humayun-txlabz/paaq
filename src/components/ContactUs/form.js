import React from "react";
import { Select } from "antd";
const { Option } = Select;

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
            suffixIcon={<div></div>}
            placeholder={<div className="placeholderText">Choose the reason</div>}
            className="select"
            onChange={handleChangeSelect}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className="input-with-label">
          <label>Message</label>
          <input placeholder="Enter your name" />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
