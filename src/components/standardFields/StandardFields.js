import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  .chartBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 10px;
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

  /* input effect */
  textarea {
    min-height: 90px;
    border: none;
    padding: 15px;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #fff;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #fff;
    }
  }

  textarea,
  input[type="text"]:focus,
  input[type="password"]:focus {
    outline: none;
  }
  textarea,
  input[type="text"],
  input[type="password"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  .effect-10,
  .effect-11,
  .effect-12 {
    border: 0;
    padding: 7px 15px;
    border: 1px solid #ccc;
    position: relative;
    background: transparent;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #fff;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #fff;
    }
  }
  .effect-10 {
    border-radius: 5px;
  }
  .effect-10 ~ .focus-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    border: 3px solid #209e91;
    transition: 0.5s;
    z-index: -1;
  }

  .effect-10:focus ~ .focus-bg {
    transition: 0.5s;
    border: 3px solid #209e91;
    opacity: 1;
  }
  .effect-11 {
    border-radius: 50px;
  }
  .effect-11 ~ .focus-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;

    background-color: transparent;
    border-radius: 50px;
    transition: 0.3s;
    z-index: -1;
  }
  .effect-11:focus ~ .focus-bg {
    transition: 0.3s;
    width: 100%;
    border-radius: 50px;
    border: 3px solid #209e91;
  }

  .effect-12 {
    border-radius: 50px;
  }

  .effect-12 ~ .focus-bg {
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 100%;
    border-radius: 50px;
    background-color: transparent;
    transition: 0.3s;
    z-index: -1;
  }
  .effect-12:focus ~ .focus-bg {
    transition: 0.3s;
    width: 100%;
    left: 0;
    border-radius: 50px;
    border: 3px solid #209e91;
  }

  .effect-17 {
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
  }

  .effect-17 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-17:focus ~ .focus-border,
  .has-content.effect-17 ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }
  .effect-17 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #fff;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }

  .effect-17:focus ~ label,
  .has-content.effect-17 ~ label,
  .effect-17:in-range ~ label {
    top: -16px;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .effect-19 {
    border: 1px solid #ccc;
    padding: 7px 14px;
    transition: 0.4s;
    background: transparent;
  }

  .effect-19 ~ .focus-border:before,
  .effect-19 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-19 ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }
  .effect-19 ~ .focus-border i:before,
  .effect-19 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #209e91;
    transition: 0.6s;
  }
  .effect-19 ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  .effect-19:focus ~ .focus-border:before,
  .effect-19:focus ~ .focus-border:after,
  .has-content.effect-19 ~ .focus-border:before,
  .has-content.effect-19 ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .effect-19:focus ~ .focus-border i:before,
  .effect-19:focus ~ .focus-border i:after,
  .has-content.effect-19 ~ .focus-border i:before,
  .has-content.effect-19 ~ .focus-border i:after {
    top: -1px;
    height: 100%;
    transition: 0.6s;
  }
  .effect-19 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #fff;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-19:focus ~ label,
  .has-content.effect-19 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .input-effect {
    float: left;
    width: 27.33%;
    margin: 40px 3%;
    position: relative;
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 600px) {
    .input-effect {
      float: left;
      width: 95%;
      margin: 20px 3%;
      position: relative;
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (min-width: 600px) and (max-width: 768px) {
    .input-effect {
      float: left;
      width: 43.99%;
      margin: 20px 3%;
      position: relative;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const StandardFields = () => {
  return (
    <DIV>
      <div className="chartBox">
        <div className="container-head">
          <h1>standard fields</h1>
        </div>
        <div>
          <div className="col input-effect">
            <input className="effect-17" type="text" placeholder="" />
            <label>Border bottom</label>
            <span className="focus-border"></span>
          </div>
          <div className="col input-effect">
            <input className="effect-19" type="text" placeholder="" />
            <label>Standatd input</label>
            <span className="focus-border">
              <i></i>
            </span>
          </div>
          <div class="col input-effect">
            <input class="effect-10" type="text" placeholder="Border radius" />
            <span class="focus-bg"></span>
          </div>
          <div class="col input-effect">
            <input class="effect-11" type="text" placeholder="Border rounded" />
            <span class="focus-bg"></span>
          </div>
          <div class="col input-effect">
            <input class="effect-12" type="password" placeholder="password" />
            <span class="focus-bg"></span>
          </div>
          <div className="col input-effect">
            <textarea
              className="effect-19"
              placeholder="textarea"
              type="text"
            />

            <span className="focus-border">
              <i></i>
            </span>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default StandardFields;
