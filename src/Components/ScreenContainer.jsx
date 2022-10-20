//Packages
import React from "react";
import styled from "styled-components";
//Assets
import Logo from "../assets/Logo512.png";
import AuntiesAlgosColorPalette from "./AuntiesAlgosColorPalette";
import { LogoAndName } from "./LogoAndName";

//Component
function ScreenContainer(props) {
  const styles = {
    backgroundColor: props.background ? props.background : AuntiesAlgosColorPalette.background,
  };

  return (
    <MainPadding>
      <LogoAndName link={"/"}/>
      {props.children}
    </MainPadding>
  );
}


const MainPadding = styled.div`
  padding: 1vh 10vw;
  background-color: ${AuntiesAlgosColorPalette.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default ScreenContainer;
