//Packages
import styled from "styled-components";
import { useLottie } from "lottie-react";

//Source code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/bake.json";

function OnboardingParentPieChart() {
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
      <Title style={{ paddingBottom: "30px" }}>
        {" "}
        Prioritise the things that are the most important.{" "}
      </Title>
      <Animation />

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
