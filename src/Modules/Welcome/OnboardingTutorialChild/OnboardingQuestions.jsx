//Packages
import styled from "styled-components";
import Lottie from "react-lottie";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/run.json";

function OnboardingQuestions() {
  return (
    <>
      <Title> Find compatible matches without reveleaing all your info. </Title>
      <GreyBg>
        <CenteredDiv>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: JSONanimation,
              renderer: "svg",
            }}
            isClickToPauseDisabled={true}
            height={320}
            width={320}
            style={{ borderRadius: 10}}
          />
        </CenteredDiv>
      </GreyBg>

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

const GreyBg = styled.div`
  background-color: #FFFFFF;
  padding: 1vh 1vw;
  border-radius: 10px;
`;
