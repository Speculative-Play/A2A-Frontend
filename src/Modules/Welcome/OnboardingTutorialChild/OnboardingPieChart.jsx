//Packages
import styled from "styled-components";
import Lottie from "react-lottie";

//Source Code
import Title from "../../../Components/Title";
import * as JSONanimation from "../../../assets/bake.json";


function OnboardingPieChart() {
  return (
    <>
      <Title> Combine a bunch of matching methods together </Title>
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
          Play with a piechart to explore and prioritise different {" "}
        </p>
        <p>
          categories and find out who pops up in your list!{" "}
        </p>
      </CenteredDiv>
    </>
  );
}

export default OnboardingPieChart;

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
