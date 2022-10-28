//Packages
import styled from "styled-components";
import Lottie from "react-lottie";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/glid.json";

function OnboardingMatchProfiles() {
  return (
    <>
      <Title> See your match profiles and chat with them! </Title>
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
            style={{ borderRadius: 10 }}
          />
        </CenteredDiv>
      </GreyBg>

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

const GreyBg = styled.div`
  background-color: #ffffff;
  padding: 1vh 1vw;
  border-radius: 10px;
`;
