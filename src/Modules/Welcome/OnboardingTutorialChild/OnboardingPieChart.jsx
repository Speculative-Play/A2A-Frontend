//Packages
import styled from "styled-components";

//Source Code
import Title from "../../../Components/Title";
function OnboardingPieChart() {
  return (
    <>
      <Title> Combine a bunch of matching methods together </Title>
      <GreyBg>
        <CenteredDiv>
          <p>Drags the piechart segments and the matches' </p>
          <p>rankings change on the side.</p>
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
  background-color: #f5eaea;
  padding: 1vh 1vw;
  border-radius: 10px;
`;
