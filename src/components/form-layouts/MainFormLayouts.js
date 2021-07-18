import React from "react";
import styled from "styled-components";
import InlineForm from "./InlineForm";
import BasicForm from "./BasicForm";
import WithoutLabelForm from "./WithoutLabelForm";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainFormLayouts = () => {
  return (
    <Styles>
      <div className="row">
        <InlineForm />
      </div>
      <div className="row">
        <div className="col-md-6">
          <BasicForm />
        </div>
        <div className="col-md-6">
          <WithoutLabelForm />
        </div>
      </div>
    </Styles>
  );
};
export default MainFormLayouts;
