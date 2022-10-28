//Packages
import styled from "styled-components";
import Lottie from "react-lottie";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/glid.json";

function OnboardingBiodata() {
  return (
    <>
      <Title style={{ paddingBottom: "30px" }}>
        {" "}
        We offer a new approach for helping your child find a life partner
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
            style={{ borderRadius: 10 }}
          />
        </CenteredDiv>
      </GreyBg>

      <CenteredDiv>
        <p>Your child has already filled out their information and </p>
        <p>we made them into categories.</p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingBiodata;

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
