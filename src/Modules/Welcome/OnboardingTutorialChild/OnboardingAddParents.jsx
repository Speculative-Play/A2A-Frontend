//Packages
import styled from "styled-components";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/compile.json";
import Animation from "../../../Components/Animation";

function OnboardingAddParents() {
  return (
    <>
      <Title> Ask your parents to help you find a match if you want! :D </Title>
      <Animation animationFile={JSONanimation} />

      <CenteredDiv>
        <p>
          You can add a parents account to your profile so they can play with
          the pie chart{" "}
        </p>
        <p>
          and see some biodata info to help you find a match and star their
          favourite profiles for you to see!{" "}
        </p>
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
