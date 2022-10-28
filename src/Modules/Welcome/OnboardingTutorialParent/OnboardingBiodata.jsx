//Packages
import styled from "styled-components";
import { useLottie } from "lottie-react";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/glid.json";

function OnboardingBiodata() {
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
      <Title style={{ paddingBottom: "30px" }}>
        {" "}
        We offer a new approach for helping your child find a life partner
      </Title>
      <Animation />

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
`;
