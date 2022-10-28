//Packages
import styled from "styled-components";

//Source code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/bake.json";
import Animation from "../../../Components/Animation";

function OnboardingParentPieChart() {
  return (
    <>
      <Title style={{ paddingBottom: "30px" }}>
        {" "}
        Prioritise the things that are the most important.{" "}
      </Title>
      <Animation animationFile={JSONanimation} />

      <CenteredDiv>
        <p>
          The match rankings change as you give weighted preference to each
          category.{" "}
        </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingParentPieChart;

//Styled Components

const CenteredDiv = styled.div`
  font-size: 14px;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-style: light;
  color: #000000;
  padding-top: 1px;
  flex-wrap: wrap;
`;
