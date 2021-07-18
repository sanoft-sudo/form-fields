import React, { useState } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import RippleButton from "./RippleButton";
const Styles = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 5px;

  .form-label {
    color: #fff;
  }

  .form-control {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    outline: none !important;
    outline-width: 0;
    color: #fff;
    font-size: 15px;
  }
  .form-control:focus {
    border-color: #ced4da;
    box-shadow: none;
  }
  .sub-subTitle {
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
  }
  .name-success,
  .email-success,
  .phone-success {
    color: rgba(0, 255, 121, 0.9);
  }
  .name-error,
  .name-toShort,
  .email-error,
  .phone-error {
    color: rgba(255, 0, 31, 1);
  }

  .name-success {
    display: ${({ isName }) => (isName.isLooksGood ? "block" : "none")};
  }
  .name-toShort {
    display: ${({ isName }) => (isName.isToShort ? "block" : "none")};
  }
  .name-error {
    display: ${({ isName }) => (isName.isRequired ? "block" : "none")};
  }
  .email-success {
    display: ${({ isEmail }) => (isEmail.isLooksGood ? "block" : "none")};
  }

  .email-error {
    display: ${({ isEmail }) => (isEmail.isRequired ? "block" : "none")};
  }

  .phone-success {
    display: ${({ isPhone }) => (isPhone.isLooksGood ? "block" : "none")};
  }

  .phone-error {
    display: ${({ isPhone }) => (isPhone.isRequired ? "block" : "none")};
  }
`;

const InlneForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isName, setIsName] = useState({
    isToShort: false,
    isRequired: false,
    isLooksGood: false
  });
  const [isEmail, setIsEmail] = useState({
    isRequired: false,
    isLooksGood: false
  });
  const [isPhone, setIsPhone] = useState({
    isRequired: false,
    isLooksGood: false
  });

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    formFields[name] = value;
    if (
      formFields?.name !== "" &&
      formFields?.name?.length > 0 &&
      formFields?.name?.length < 2
    ) {
      console.log("Name is to short");
      setIsName({ isToShort: true, isRequired: false, isLooksGood: false });
    }
    if (formFields?.name?.length > 1) {
      console.log(" name looks good");
      setIsName({ isToShort: false, isRequired: false, isLooksGood: true });
    }
    if (formFields?.name === "") {
      console.log("name is required");
      setIsName({ isToShort: false, isRequired: true, isLooksGood: false });
    }
  };

  const handleEmailChange = (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { name, value } = e.target;
    formFields[name] = value;
    if (re.test(formFields?.email)) {
      console.log("email looks good");
      setIsEmail({ isRequired: false, isLooksGood: true });
    } else {
      console.log("email is not valid");
      setIsEmail({ isRequired: true, isLooksGood: false });
    }
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    formFields[name] = value;
    // let myPhone = formFields.phone.replace(/[- )(]/g, "");
    let myPhone = formFields.phone.replace(/[^A-Z0-9]/gi, "");
    if (myPhone.length === 12) {
      console.log("phone looks good");
      setIsPhone({ isRequired: false, isLooksGood: true });
    } else {
      console.log("Phone not valid");
      setIsPhone({ isRequired: true, isLooksGood: false });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formFields?.name !== "" &&
      formFields?.name?.length > 0 &&
      formFields?.name?.length < 2
    ) {
      console.log("Name is to short");
      setIsName({ isToShort: true, isRequired: false, isLooksGood: false });
    }
    if (formFields?.name?.length > 1) {
      console.log(" name looks good");
      setIsName({ isToShort: false, isRequired: false, isLooksGood: true });
    }
    if (formFields?.name === "") {
      console.log("name is required");
      setIsName({ isToShort: false, isRequired: true, isLooksGood: false });
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { name, value } = e.target;
    formFields[name] = value;
    if (re.test(formFields?.email)) {
      console.log("email looks good");
      setIsEmail({ isRequired: false, isLooksGood: true });
    } else {
      console.log("email is not valid");
      setIsEmail({ isRequired: true, isLooksGood: false });
    }
    let myPhone = formFields.phone.replace(/[^A-Z0-9]/gi, "");
    if (myPhone.length === 12) {
      console.log("phone looks good");
      setIsPhone({ isRequired: false, isLooksGood: true });
    } else {
      console.log("Phone not valid");
      setIsPhone({ isRequired: true, isLooksGood: false });
    }
  };
  return (
    <Styles isEmail={isEmail} isPhone={isPhone} isName={isName}>
      <h1 className="sub-subTitle">Inline form</h1>
      <form
        onSubmit={handleSubmit}
        className="row g-3 needs-validation"
        novalidate
      >
        <div className="col-sm-4">
          <label htmlFor="validationCustom01" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            onChange={(e) => handleNameChange(e)}
            name="name"
            defaultValue={formFields?.name}
          />
          <div className="name-success">Looks good!</div>
          <div className="name-error">This is required field!</div>
          <div className="name-toShort">Name to short!</div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="validationCustom02" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            onChange={(e) => handleEmailChange(e)}
            name="email"
            defaultValue={formFields?.email}
          />
          <div className="email-success">Looks good!</div>
          <div className="email-error">Email is not valid!</div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="validationCustom02" className="form-label">
            Phone
          </label>
          <NumberFormat
            id="validationCustom02"
            className="form-control"
            format="+998 (##) ###-####"
            allowEmptyFormatting
            onChange={(e) => handlePhoneChange(e)}
            name="phone"
            defaultValue={formFields?.phone}
          />

          <div className="phone-success">Looks good!</div>
          <div class="phone-error">Phone number is not valid!</div>
        </div>
        <button type="submit">on</button>
        {/* <RippleButton type="submit" onClick={(e) => console.log(e)}>
          Submit
        </RippleButton> */}
      </form>
    </Styles>
  );
};
export default InlneForm;
