//Packages
import React, { useState } from "react";
import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Button } from "@material-ui/core";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

//Source code
import RadialSeparators from "./RadialSeperators";
import QuestionComponent from "./QuestionComponent";

//Component
function AccordionItem(props) {


  return (
    <StyledAccordion>
      <StyledAccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <AccordionHeader>
          <h3 style={{ textAlign: "center" }}>{props.heading}</h3>
          <ProgressContainer>
            <CircularProgressbarWithChildren
              value={props.progressPercentage}
              text={`${props.progressPercentage}%`}
              strokeWidth={10}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: props.progressColor,
              })}
            >
              <RadialSeparators
                count={12}
                style={{
                  background: "white",
                  width: "1px",
                  height: `${10}%`,
                }}
              />
            </CircularProgressbarWithChildren>
          </ProgressContainer>
        </AccordionHeader>
        <AccordinonInfo style={{ fontFamily: "Fira Sans" }}>
          {props.description}
        </AccordinonInfo>
      </StyledAccordionSummary>
    </StyledAccordion>
  );
}

//Styling
const StyledAccordion = styled(Accordion)`
  margin-bottom: 20px;
  &.MuiAccordion-root:before {
    opacity: 0;
  }
  &.MuiAccordion-rounded:first-child,
  &.MuiAccordion-rounded:last-child {
    border-radius: 10px;
  }
  &.MuiAccordion-rounded {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
const StyledAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    justify-content: center;
    display: block;
  }
`;
const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:first-child {
    flex-grow: 3;
    align-items: center;
  }
`;
const AccordinonInfo = styled.p`
  font-size: 0.85rem;
  padding: 0 5vw;
  margin-top: 0;
`;
const ProgressContainer = styled.div`
  width: 45px;
  height: 45px;
`;

export default AccordionItem;
