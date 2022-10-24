//Packages
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, FormGroup } from "@material-ui/core";
// import { PieChart, Pie, Cell } from "recharts";
import { PieChart as MinimalPieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";

//SourceCode
import ListOfMatches from "./ListOfMatches";
import { LogoAndName } from "../../../Components/LogoAndName";
// import ScreenContainer from "../../../Components/ScreenContainer";
import AuntiesAlgosColorPalette from "../../../Components/AuntiesAlgosColorPalette";
//Component
function GetMatchPage(props) {
  function HeaderBar(props) {
    function HeaderLinks(props) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Fira Sans",
            fontSize: 14,
          }}
        >
          <Link
            to={""}
            style={{
              textDecoration: "none",
              color: AuntiesAlgosColorPalette.heading,
            }}
          >
            <h3 style={{ paddingTop: 24, paddingRight: 70 }}>Parents</h3>
          </Link>
          <Link
            to={"/get-match"}
            style={{
              textDecoration: "none",
              color: AuntiesAlgosColorPalette.heading,
            }}
          >
            <h3 style={{ paddingTop: 24, paddingRight: 70 }}>Match</h3>
          </Link>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: AuntiesAlgosColorPalette.heading,
            }}
          >
            <h3 style={{ paddingTop: 24, paddingRight: 70 }}>Logout</h3>
          </Link>
        </div>
      );
    }

    return (
      <div
        style={{
          backgroundColor: AuntiesAlgosColorPalette.background,
          paddingLeft: "5vw",
          paddingBottom: "10vh",
          paddingTop: "5vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <LogoAndName link={""} />
        <HeaderLinks />
      </div>
    );
  }

  const [catValues, setCatValues] = useState([
    {
      id: "eth_rel",
      name: "Ethnicity, Religion",
      value: 60,
      active: true,
      color: "#FFF0B3",
    },
    {
      id: "edu_occ",
      name: "Education, Occupation",
      value: 60,
      active: true,
      color: "#C0B6F2",
    },
    {
      id: "hob",
      name: "Hobbies",
      value: 60,
      active: true,
      color: "#ABF5D1",
    },
    {
      id: "phy_chr",
      name: "Physical Characteristics",
      value: 60,
      active: true,
      color: "#FFBDAD",
    },
    {
      id: "lif_hab",
      name: "Lifestyle & Habits",
      value: 60,
      active: true,
      color: "#B3D4FF",
    },
    {
      id: "kun",
      name: "Kundali",
      value: 60,
      active: true,
      color: "#00C7E6",
    },
  ]);

  const valueUpdateHandler = (id, diff) => {
    const newVal = [...catValues];
    let next = 1;
    newVal[id].value = catValues[id].value + diff;
    // if ()
    newVal[(id + 1) % 6].value = catValues[(id + 1) % 6].value - diff;
    setCatValues(newVal);
    console.log(catValues);
  };

  return (
    <div>
      <HeaderBar />
      <ScreenBackground>
        <div>
          <StyledFormGroup row id="categories-container"></StyledFormGroup>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <ListContainerStyle style={{ borderColor: "red" }}>
              <MinimalPieChart
                lineWidth={45}
                paddingAngle={5}
                data={catValues}
                segmentsStyle={{ borderColor: "#F77B44", borderWidth: 100 }}
                label={(labelRenderProps) => labelRenderProps.dataEntry.name}
                labelPosition={120}
                labelStyle={{ fontSize: 2, flexDirection: "column" }}
                radius={30}
                onClick={(e, segmentIndex) => {
                  {
                    valueUpdateHandler(segmentIndex, 5);
                  }
                }}
              />
            </ListContainerStyle>

            <QuestionsContainer>
              <ListContainerStyle>
                <div>Do you want to have more ways to match?</div>
                <div>
                  Click here to fill out more details about your astrological
                  information.
                </div>
                <div>
                  <QuestionsButton>Go to Questions</QuestionsButton>
                </div>
              </ListContainerStyle>
              <ListContainerStyle>
                <div style={{ fontFamily: "Fira Sans" }}>
                  Do you want to have more ways to match?
                </div>
                <div style={{ fontFamily: "Fira Sans" }}>
                  Click here to fill out more details about your astrological
                  information.
                </div>
                <div>
                  <QuestionsButton>Go to Questions</QuestionsButton>
                </div>
              </ListContainerStyle>
            </QuestionsContainer>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ListOfMatches />
          </Grid>
        </Grid>
      </ScreenBackground>
    </div>
  );
}

//Styling

const ListContainerStyle = styled.div`
  background-color: rgba(245, 234, 234);
  border-radius: 17px;
  padding: 25px;
`;
const QuestionsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 20px;
  align-items: center;
  div {
    flex-grow: 1;
  }
`;
const QuestionsButton = styled(Button)`
  &:not(#bt #gt) {
    background: #e8a3b0;
    border-radius: 14px;
    margin-top: 1rem;
    color: #fff;
    padding: 0.5rem 1rem;
  }
`;

const StyledFormGroup = styled(FormGroup)`
  gap: 30px;
  margin-bottom: 3rem;
`;
const ScreenBackground = styled.div`
  background-color: ${AuntiesAlgosColorPalette.background};
  padding: 1vh 15vw;
`;

export default GetMatchPage;
