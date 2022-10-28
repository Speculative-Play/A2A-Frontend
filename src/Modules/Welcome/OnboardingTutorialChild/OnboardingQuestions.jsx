//Packages
import styled from "styled-components";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/run.json";
import Animation from "../../../Components/Animation";

function OnboardingQuestions() {
  return (
    <>
      <Title> Find compatible matches without reveleaing all your info. </Title>
      <Animation animationFile={JSONanimation} />

      <CenteredDiv>
        <p>
          Answer to questions in different categories and choose to make them
          visible or invisible to your matches.{" "}
        </p>
        <p>
          The higher the completion rate, the better we can get you matched!{" "}
        </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingQuestions;

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
