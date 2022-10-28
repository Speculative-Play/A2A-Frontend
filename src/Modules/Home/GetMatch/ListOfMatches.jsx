//Packages
import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import MatchProfiles from "../../../Components/AuntiesAlgosMatchProfiles";

//Source Code
import MatchItem from "./MatchItem";

//Component
function GetMatchPage(props) {
  const SampleMatch = (props) => {
    return (
      <>
        <Grid item xs={12}>
          <MatchItem
            serialNumber={props.profile.ProfileID}
            Name={props.profile.Name}
            Age={props.profile.Age}
            Location={props.profile.Location}
          />
        </Grid>
      </>
    );
  };
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <ListContainerStyle>
      <h1
        style={{ textAlign: "center", fontFamily: "Fira Sans", fontSize: 24 }}
      >
        Matches
      </h1>
      <Grid container spacing={2} direction="column">
        {shuffleArray(MatchProfiles)}
        {MatchProfiles.map((item) => {
          return <SampleMatch profile={item} />;
        })}
      </Grid>
    </ListContainerStyle>
  );
}

//Styling
const ListContainerStyle = styled.div`
  background-color: #f5eaea70;
  border-radius: 17px;
  padding: 25px;
`;

export default GetMatchPage;
