//Packages
import styled from "styled-components";
import {useLottie} from "lottie-react";


//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/compile.json";

function OnboardingAddParents() {
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
      <Title>
        {" "}
        Ask your parents to help you find a match if you want! :D{" "}
      </Title>
      <Animation />

      <CenteredDiv>
       <p>You can add a parents account to your profile so they can play with the pie chart </p>
       <p>and see some biodata info to help you find a match and star their favourite profiles for you to see! </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingAddParents;

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
