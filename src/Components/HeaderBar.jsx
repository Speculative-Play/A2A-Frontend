import React from "react";
import { Link } from "react-router-dom";
import AuntiesAlgosColorPalette from "./AuntiesAlgosColorPalette";
import { LogoAndName } from "./LogoAndName";
import { ProfilePicture } from "./ProfilePicture";
//Component
export const HeaderBar = (props) => {
  const LinkElement = (props) => {
    return (
      <Link
        to={props.link}
        style={{
          textDecoration: props.current
            ? "underline 3px " + AuntiesAlgosColorPalette.logoColor
            : "none",
          color: AuntiesAlgosColorPalette.heading,
        }}
      >
        <h3 style={{ paddingTop: 24, paddingRight: 70 }}>{props.name}</h3>
      </Link>
    );
  };
  const HeaderLinks = (props) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontFamily: "Fira Sans",
          fontSize: 14,
          paddingLeft: "22vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.links?.map((v) => (
          <LinkElement name={v.linkName} link={v.link} current={v.current} />
        ))}
        <Link to={"/profile"}>
          <ProfilePicture />
        </Link>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : AuntiesAlgosColorPalette.background,
        paddingLeft: "5vw",
        paddingBottom: "10vh",
        paddingTop: "5vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <LogoAndName link={""} />
      <HeaderLinks links={props.links} />
    </div>
  );
};
