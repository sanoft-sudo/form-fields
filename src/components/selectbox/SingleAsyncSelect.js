import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import AsyncSelect from "react-select/async";

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

const SingleAsyncSelect = () => {
  const [inputValue, setInputValue] = useState("");

  const filterIncomingInput = (inputValue) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterIncomingInput(inputValue));
    }, 1000);
  };
  const handleInputChange = (newValue) => {
    const newInputValue = newValue.replace(/\W/g, "");
    setInputValue(newInputValue);
    return newInputValue;
  };

  return (
    <Styles>
      <div className="select-wrapper">
        <h1 className="sub-subTitle">Single Async Select</h1>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
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
export default SingleAsyncSelect;
