//Packages
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, FormGroup, Slider } from "@material-ui/core";
// import { PieChart, Pie, Cell } from "recharts";
import { PieChart as MinimalPieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";

//SourceCode
import ListOfMatches from "./ListOfMatches";
import { LogoAndName } from "../../../Components/LogoAndName";
// import ScreenContainer from "../../../Components/ScreenContainer";
import AuntiesAlgosColorPalette from "../../../Components/AuntiesAlgosColorPalette";
import { HeaderBar } from "../../../Components/HeaderBar";
//Component
function GetMatchPage(props) {
  const links = [
    { linkName: "Parents", link: "/parent-stars" },
    { linkName: "Matches", link: "/get-match", current: true },
    { linkName: "Logout", link: "/" },
  ];

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
  const [threshold, setThreshold] = useState(72);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function valueUpdateHandler(id, diff) {
    const newVal = [...catValues];
    let next = 1;
    newVal[id].value = catValues[id].value + diff;
    // if ()
    newVal[(id + 1) % 6].value = catValues[(id + 1) % 6].value - diff;
    setCatValues(newVal);
    console.log(catValues);
  }

  function ActivateToggle(id) {
    const newVal = [...catValues];
    for (var i = 0; i < catValues.length; i++) {
      if (newVal[i].id === id) {
        newVal[i].active = !newVal[i].active;
        setCatValues(newVal);
        return true;
      }
    }
  }

  const CategoryButtonsPC = (props) => {
    return (
      <Button
        style={{
          borderStyle: "solid",
          borderRadius: 10,
          backgroundColor: props.active ? props.color : "#D9D9D9",
          borderColor: props.color,
          width: 200,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={(e) => {
          ActivateToggle(props.id);
        }}
      >
        <text style={{ fontFamily: "Fira Sans" }}>{props.name}</text>{" "}
      </Button>
    );
  };
  return (
    <div>
      <HeaderBar links={links} backgroundColor={"#FFFFFF"} />
      <ScreenBackground>
        <div>
          <StyledFormGroup row id="categories-container">
            {catValues.map((v) => (
              <CategoryButtonsPC
                id={v.id}
                name={v.name}
                color={v.color}
                active={v.active}
              />
            ))}
          </StyledFormGroup>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <ListContainerStyle style={{ borderColor: "red" }}>
              <MinimalPieChart
                lineWidth={45}
                paddingAngle={0}
                data={catValues.filter((v) => v.active)}
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
                <text
                  style={{
                    fontFamily: "Fira Sans",
                    fontSize: 20,
                  }}
                >
                  Compatibility Threshold
                </text>
                <div style={{ marginTop: 20 }}>
                  <text>
                    This slider determines a base level of match you want in a
                    partner. We only show you people who meet or surpass your
                    threshold.
                  </text>
                  <Slider
                    aria-label="CompatibilityThreshold"
                    defaultValue={threshold}
                    valueLabelDisplay="auto"
                    color={AuntiesAlgosColorPalette.thresholdSliderColor}
                    step={1}
                    min={20}
                    max={100}
                    onChange={(e, v) => setThreshold(v)}
                    style={{ marginTop: 20 }}
                  />
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
  text-align: center;
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
  background-color: #fff;
  padding: 1vh 15vw;
`;

export default GetMatchPage;
