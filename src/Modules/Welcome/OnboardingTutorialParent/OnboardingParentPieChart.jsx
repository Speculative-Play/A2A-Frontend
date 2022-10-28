//Packages
import styled from "styled-components";
import Lottie from "react-lottie";

//Source code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/bake.json";

function OnboardingParentPieChart() {
  return (
    <>
      <Title style={{ paddingBottom: "30px" }}>
        {" "}
        Prioritise the things that are the most important.{" "}
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
        <p>
          The match rankings change as you give weighted preference to each
          category.{" "}
        </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingParentPieChart;

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
