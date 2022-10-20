// Dependencies 
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Sources
import AuntiesAlgosColorPalette from "./AuntiesAlgosColorPalette";
import AppLogo from "./AppLogo";

export function LogoAndName(props) {
  return (
    <Link
      to={props.link}
      style={{ textDecoration: "none", color: AuntiesAlgosColorPalette.title }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <AppLogo />
        <AuntiesAlgorithms>Aunties + Algorithms</AuntiesAlgorithms>
      </div>
    </Link>
  );
}

const AuntiesAlgorithms = styled.h1`
  font-size: 20px;
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-style: light;
  color: ${AuntiesAlgosColorPalette.title};
`;
