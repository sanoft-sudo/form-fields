import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .chartBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 2px;
  }
  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head h1 {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }
  .validation-box input[type="text"] {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    /* height:30px; */
    padding: 8px 6px;
    border-radius: 5px;
  }
  .validation-box .error-valid {
    position: relative;
    margin: 10px 0;
  }
  .validation-box input[name="error"] {
    border: 1px solid red;
    outline: none;
  }
  .validation-box .error-valid span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
  .error-valid span .far {
    font-size: 18px;
    color: red;
  }
  .validation-box .warning-valid {
    position: relative;
    margin: 10px 0;
  }
  .validation-box input[name="warning"] {
    border: 1px solid orange;
    outline: none;
  }
  .validation-box .warning-valid span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
  .warning-valid span .fas {
    font-size: 18px;
    color: orange;
  }
  .validation-box .success-valid {
    position: relative;
    margin: 10px 0;
  }
  .validation-box input[name="success"] {
    border: 1px solid rgba(0, 255, 28, 1);
    outline: none;
  }
  .validation-box .success-valid span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
  .success-valid span .fas {
    font-size: 18px;
    color: rgba(0, 255, 28, 1);
  }
  .sub-subTitle {
    font-size: 17px;
    text-transform: uppercase;
    margin-top: 15px;
    color: #fff;
  }

  .required-field {
    color: red;
  }
  .warning-field {
    color: orange;
  }
  .success-field {
    color: rgba(0, 255, 28, 1);
  }
  .error-valid.no-margin,
  .success-valid.no-margin,
  .warning-valid.no-margin {
    margin: 0;
  }
`;

const ValidationInputs = () => {
  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>validation fields</h1>
        </div>
        <div className="validation-box">
          <h1 className="sub-subTitle">Basic</h1>
          <div className="error-valid">
            <input type="text" name="error" placeholder="Not valid" required />
          </div>
          <div className="warning-valid">
            <input
              type="text"
              name="warning"
              placeholder="Not valid"
              required
            />
          </div>
          <div className="success-valid">
            <input
              type="text"
              name="success"
              placeholder="Not valid"
              required
            />
          </div>

          <h1 className="sub-subTitle">With Icons</h1>
          <div className="error-valid">
            <input type="text" name="error" placeholder="Not valid" required />
            <span className="error-valSpan">
              <i className="far fa-times-circle"></i>
            </span>
          </div>
          <div className="warning-valid">
            <input
              type="text"
              name="warning"
              placeholder="Not valid"
              required
            />
            <span className="warning-valSpan">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <div className="success-valid">
            <input
              type="text"
              name="success"
              placeholder="Not valid"
              required
            />
            <span className="success-valSpan">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <h1 className="sub-subTitle">With helpers</h1>
          <div className="error-valid no-margin">
            <input type="text" name="error" placeholder="Not valid" required />
            <span className="error-valSpan">
              <i className="far fa-times-circle"></i>
            </span>
          </div>
          <p className="required-field">Required field!</p>
          <div className="warning-valid no-margin">
            <input
              type="text"
              name="warning"
              placeholder="Not valid"
              required
            />
            <span className="warning-valSpan">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="warning-field">Too weak!</p>
          <div className="success-valid no-margin">
            <input
              type="text"
              name="success"
              placeholder="Not valid"
              required
            />
            <span className="success-valSpan">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="success-field">Looks good!</p>
        </div>
      </div>
    </Styles>
  );
};
export default ValidationInputs;
