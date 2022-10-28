//Packages
import styled from "styled-components";
import { useLottie } from "lottie-react";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/glid.json";
import Animation from "../../../Components/Animation";

function OnboardingMatchProfiles() {

  return (
    <>
      <Title> See your match profiles and chat with them! </Title>
      <Animation animationFile={JSONanimation} />

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
