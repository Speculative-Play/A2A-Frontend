//Packages
import styled from "styled-components";
import Lottie from "react-lottie";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/run.json";

function OnboardingStarProfile() {
  return (
    <>
      <Title> Star the good matches </Title>
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

const GreyBg = styled.div`
  background-color: #ffffff;
  padding: 1vh 1vw;
  border-radius: 10px;
`;
