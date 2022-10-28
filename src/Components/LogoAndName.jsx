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
        <AuntiesHeadingStyle>AUNTIES</AuntiesHeadingStyle>
        <AlgosHeadingStyle>+ALGORITHMS</AlgosHeadingStyle>
      </div>
    </Link>
  );
}

const AuntiesHeadingStyle = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: left;
  font-family: "Fira Sans Light"
  color: ${AuntiesAlgosColorPalette.title};
`;
const AlgosHeadingStyle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 24px;
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  color: ${AuntiesAlgosColorPalette.title};
`;
