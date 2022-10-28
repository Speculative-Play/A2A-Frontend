//Packages
import styled from "styled-components";
import { useLottie } from "lottie-react";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/bake.json";

function OnboardingPieChart() {
  const Animation = () => {
    const animationOptions = {
      animationData: JSONanimation,
      loop: true,
      autoplay: true,
      style: { height: 500, width: 500 },
    };
    const { View } = useLottie(animationOptions);
    return <>{View}</>;
  };
  return (
    <>
      <Title> Combine a bunch of matching methods together </Title>
      <Animation />

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

