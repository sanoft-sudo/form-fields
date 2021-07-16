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
  margin: 10px 0px;
  color: #fff;
  h1 {
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
  }
`;

const CheckboxAndRadioStandard = () => {
  return (
    <DIV>
      <h1>Simple checkbox and radio</h1>
      <div className="my-2">
        <Checkbox
          icon={<i className="fas fa-check" style={{ color: "green" }}></i>}
        >
          Basic check
        </Checkbox>
        <Checkbox
          color="success"
          icon={<i className="fas fa-check" style={{ color: "#fff" }}></i>}
        >
          Standart check
        </Checkbox>
        <Checkbox color="info">Regular check</Checkbox>
        <Checkbox color="warning" shape="curve">
          Curved check
        </Checkbox>
        <Checkbox color="danger" shape="round">
          Round check
        </Checkbox>
      </div>
      <div className="my-2">
        <Radio name="pizza" value="thin" shape="square">
          Radio 1
        </Radio>
        <Radio name="pizza" value="deep-dish" color="info" shape="curve">
          Radio 2
        </Radio>
        <Radio name="pizza" color="danger" value="regular">
          Radio 3
        </Radio>
      </div>
    </DIV>
  );
};
export default CheckboxAndRadioStandard;
