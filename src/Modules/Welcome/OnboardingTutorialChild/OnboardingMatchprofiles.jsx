//Packages
import styled from "styled-components";
import {useLottie} from "lottie-react";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/glid.json";

function OnboardingMatchProfiles() {
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
      <Title> See your match profiles and chat with them! </Title>
      <Animation />

      <CenteredDiv>
        <p>Once you checked your potential matches profile you </p>
        <p>can chat with them and know more about each other! </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingMatchProfiles;

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
