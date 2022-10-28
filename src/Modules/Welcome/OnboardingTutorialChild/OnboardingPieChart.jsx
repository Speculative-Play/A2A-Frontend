//Packages
import styled from "styled-components";
import { useLottie } from "lottie-react";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/bake.json";
import Animation from "../../../Components/Animation";

function OnboardingPieChart() {

  return (
    <>
      <Title> Combine a bunch of matching methods together </Title>
      <Animation animationFile={JSONanimation} />

      <CenteredDiv>
        <p>Play with a piechart to explore and prioritise different </p>
        <p>categories and find out who pops up in your list! </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingPieChart;

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
