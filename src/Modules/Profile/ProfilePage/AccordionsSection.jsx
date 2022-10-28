//Packages
import React from "react";
import styled from "styled-components";
import QuestionCategories from "../../../Components/AuntiesAlgosQuestionCategories";

//Source code
import AccordionItem from "./AccordionItem";

//Component
function AccordionsSection(props) {
  return (
    <div>
      {QuestionCategories.map((category) => {
        return (
          <AccordionItem
            heading={category.Title}
            description={category.Description}
            progressPercentage={0}
            progressColor={category.Color}
          />
        );
      })}

    </div>
  );
}

//Styling
export default AccordionsSection;
