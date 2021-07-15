import React from "react";
import styled from "styled-components";
import StandardFields from "./standardFields/StandardFields";

const DIV = styled.div``;

const MainBox = () => {
  return (
    <DIV>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <StandardFields />
        </div>
        <div className="col-md-6 col-sm-12">
          <StandardFields />
        </div>
      </div>
    </DIV>
  );
};

export default MainBox;
