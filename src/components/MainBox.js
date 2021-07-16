import React from "react";
import styled from "styled-components";
import SelectBoxes from "./selectbox/SelectBoxes";
import CheckboxAndRadioMain from "./standardFields/CheckboxAndRadioMain";
import MainTagsInput from "./standardFields/MainTagsInput";
import StandardFields from "./standardFields/StandardFields";
import ToggleButtons from "./standardFields/ToggleButtons";
import ValidationInputs from "./validationInputs/ValidationInputs";

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
        <div className="col-md-6 col-sm-12">
          <ValidationInputs />
          <SelectBoxes />
        </div>
      </div>
    </DIV>
  );
};

export default MainBox;
