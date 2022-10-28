//Packages
import styled from "styled-components";
import Lottie from "react-lottie";


//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/compile.json";

function OnboardingAddParents() {
  return (
    <>
      <Title>
        {" "}
        Ask your parents to help you find a match if you want! :D{" "}
      </Title>
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

const GreyBg = styled.div`
  background-color: #FFFFFF;
  padding: 1vh 1vw;
  border-radius: 10px;
`;
