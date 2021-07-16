import React, { useState } from "react";
import styled from "styled-components";
import Select, { components } from "react-select";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;

  .select-wrapper {
    background: rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
  }

  .sub-subTitle {
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
  }
`;

const options = [
  { value: "javacsript", label: "Javacsript" },
  { value: "react", label: "React" },
  { value: "redux", label: "Redux" },
  { value: "next", label: "Next" }
];

const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <i
        className="far fa-times-circle"
        primaryColor={"rgba( 255, 0, 0, 0.6 );"}
      ></i>
    </components.MultiValueRemove>
  );
};

const BasicMaltiSelect = () => {
  return (
    <Styles>
      <div className="select-wrapper">
        <h1 className="sub-subTitle">Basic Multi Select</h1>
        <Select
          closeMenuOnSelect={false}
          defaultValue={[options[1], options[3]]}
          isMulti
          components={MultiValueRemove}
          options={options}
          styles={{
            singleValue: (base) => ({ ...base, color: "#fff" }),
            valueContainer: (base) => ({
              ...base,
              background: "rgba(0,0,0,0.2)",
              color: "white",
              width: "100%"
            }),
            control: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.2)",
              border: " 1px solid rgba(0,0,0,0.2)",
              color: "white"
            }),
            indicatorSeparator: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.2)"
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "#fff"
            }),

            multiValueLabel: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.4)",
              minWidth: "60px",
              color: "white",
              borderRadius: "0px"
            }),
            multiValueRemove: (base) => ({
              ...base,
              border: `1px solid "rgba(0,0,0,0.4)"`,
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "0px"
            })
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: " rgba( 0, 0, 0, 0.4 )",
              primary50: " rgba( 0, 0, 0, 0.5 )",
              primary: " rgba( 0, 0, 0, 0.6 )"
            }
          })}
        />
      </div>
    </Styles>
  );
};
export default BasicMaltiSelect;
