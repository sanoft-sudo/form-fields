import React from "react";
import styled from "styled-components";
import CheckboxAndRadioMain from "./standardFields/CheckboxAndRadioMain";
import MainTagsInput from "./standardFields/MainTagsInput";
import StandardFields from "./standardFields/StandardFields";
import ToggleButtons from "./standardFields/ToggleButtons";

const DIV = styled.div``;

const MainBox = () => {
  return (
    <DIV>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <StandardFields />
          <MainTagsInput />
          <CheckboxAndRadioMain />
          <ToggleButtons />
        </div>
        <div className="col-md-6 col-sm-12"></div>
      </div>
    </DIV>
  );
};

export default MainBox;
