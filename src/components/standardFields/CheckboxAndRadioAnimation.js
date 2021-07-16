import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, Radio } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  color: #fff;
  h1 {
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
  }
`;

const CheckboxAndRadioAnimation = () => {
  return (
    <DIV>
      <h1>Animated checkbox and radio</h1>
      <div className="my-2">
        <Checkbox
          animation="rotate"
          color="success"
          icon={<i className="fas fa-check" style={{ color: "green" }}></i>}
        >
          Basic check
        </Checkbox>
        <Checkbox
          color="success"
          animation="tada"
          icon={<i className="fas fa-check" style={{ color: "#fff" }}></i>}
        >
          Standart check
        </Checkbox>
        <Checkbox color="info" animation="smooth">
          Regular check
        </Checkbox>
        <Checkbox color="warning" animation="jelly" shape="curve">
          Curved check
        </Checkbox>
        <Checkbox color="danger" shape="round" animation="pulse">
          Round check
        </Checkbox>
      </div>
      <div className="my-2">
        <Radio name="pizza" value="thin" shape="smooth">
          Radio 1
        </Radio>
        <Radio
          name="pizza"
          value="deep-dish"
          animation="pulse"
          color="info"
          shape="curve"
        >
          Radio 2
        </Radio>
        <Radio name="pizza" color="danger" animation="pulse" value="regular">
          Radio 3
        </Radio>
      </div>
    </DIV>
  );
};
export default CheckboxAndRadioAnimation;
