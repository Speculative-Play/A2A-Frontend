import React from "react";
import AuntiesAlgosColorPalette from "../../Components/AuntiesAlgosColorPalette";
import { HeaderBar } from "../../Components/HeaderBar";
import styled from "styled-components";

const ParentRecommendations = (props) => {
  const links = [
    { linkName: "Parents", link: "/parent-stars", current: true },
    { linkName: "Matches", link: "/get-match" },
    { linkName: "Logout", link: "/" },
  ];
  const picture = require("../../assets/Parenting.png");

  return (
    <div>
      <HeaderBar links={links} />
      <ScreenBackground>
        <div
          style={{
            backgroundColor: "white",
            padding: "5vh 10vw",
            borderRadius: 10,
            boxShadow: "8px 8px 5px #0000000f",
          }}
        >
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={picture} style={{padding: 10}} />
            <text>
              You haven’t add a ‘Parents’ account yet, you will see a list of
              starred profiles once you add your parents.
            </text>
          </div>
        </div>
      </ScreenBackground>
    </div>
  );
};

export default ParentRecommendations;

const ScreenBackground = styled.div`
  background-color: #e5e5e5;
  padding: 1vh 15vw;
`;

const WhiteBg = styled.div`
  background-color: #fff;
  padding: 5vh 10vw;
  border-radius: 10px;
  box-shadow: 8px 8px 5px #0000000f;
`;
