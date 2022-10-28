//Packages
import styled from "styled-components";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/run.json";
import Animation from "../../../Components/Animation";

function OnboardingStarProfile() {
  return (
    <>
      <Title> Star the good matches </Title>
      <Animation animationFile={JSONanimation} />

      <CenteredDiv>
        <p>
          Let your child know who you find a suitable potential match by
          starring their profile.
        </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingStarProfile;

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
