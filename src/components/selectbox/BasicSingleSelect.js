import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

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

const BasicSingleSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>Selectboxes</h1>
        </div>
        <div className="select-wrapper">
          <h1 className="sub-subTitle">Basic Single Select</h1>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
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
      </div>
    </Styles>
  );
};
export default BasicSingleSelect;
