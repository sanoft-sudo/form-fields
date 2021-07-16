import React from "react";
import styled from "styled-components";
import BasicSingleSelect from "./BasicSingleSelect";
import SingleAsyncSelect from "./SingleAsyncSelect";
import SingleCreatableSelect from "./SingleCreatableSelect";

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
`;

const Selectboxes = () => {
  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>Selectboxes</h1>
        </div>
        <BasicSingleSelect />
        <SingleAsyncSelect />
        <SingleCreatableSelect />
      </div>
    </Styles>
  );
};
export default Selectboxes;
