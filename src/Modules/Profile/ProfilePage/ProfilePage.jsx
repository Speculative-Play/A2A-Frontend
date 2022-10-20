//Packages
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Source Code
import AccordionsSection from "./AccordionsSection";
import PersonalInfo from "./PersonalInfo";
import AuntiesAlgosColorPalette from "../../../Components/AuntiesAlgosColorPalette";
import { LogoAndName } from "../../../Components/LogoAndName";

//Component
function ProfilePage(props) {
  
  
  function HeaderBar(props) {
    
    function HeaderLinks(props) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Fira Sans",
            fontSize: 14,
            // paddingLeft: "22vw",
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
            to={""}
            style={{
              textDecoration: "none",
              color: AuntiesAlgosColorPalette.heading,
            }}
          >
            <h3 style={{ paddingTop: 24, paddingRight: 70 }}>Preferences</h3>
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
          justifyContent: "space-between"
        }}
      >
        <LogoAndName link={""}/>
        <HeaderLinks />
      </div>
    );
  }

  return (
    <div>
      <HeaderBar />
      <ScreenBackground>
        <div className="card-border bg-white" style={{ marginBottom: "5%" }}>
          <PersonalInfo />
        </div>
        <AccordionsSection />
      </ScreenBackground>
    </div>
  );
}

//Styling
const ScreenBackground = styled.div`
  background-color: ${AuntiesAlgosColorPalette.background};
  padding: 1vh 15vw;
`;

export default ProfilePage;
