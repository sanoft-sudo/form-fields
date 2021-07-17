import React from "react";
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
`;

const InlneForm = () => {
  const onSubmit = (e) => {
    console.log(e.ratget.value);
  };
  return (
    <Styles>
      <h1 className="sub-subTitle">Inline form</h1>
      <form onSubmit={onSubmit} className="row g-3 needs-validation" novalidate>
        <div className="col-sm-4">
          <label htmlFor="validationCustom01" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">This is required field!</div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="validationCustom02" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="validationCustom02"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Email is not valid!</div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="validationCustom02" className="form-label">
            Phone
          </label>
          <NumberFormat
            id="validationCustom02"
            className="form-control"
            format="+998 (##) ###-####"
            mask="_"
            allowEmptyFormatting
            required
          />

          <div className="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Phone number is not valid!</div>
        </div>
        <RippleButton type="submit" onClick={(e) => console.log(e)}>
          Submit
        </RippleButton>
      </form>
    </Styles>
  );
};
export default InlneForm;
