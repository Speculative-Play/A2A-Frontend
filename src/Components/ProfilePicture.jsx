import React from "react";
import AuntiesAlgosColorPalette from "./AuntiesAlgosColorPalette";
import UserIconFemale from "./UserIconFemale";

export const ProfilePicture = (props) => {
  return <div
    style={{
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginRight: "5vw",
      display: "flex",
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        display: "flex",
        padding: 4,
        backgroundColor: AuntiesAlgosColorPalette.transparent,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderStyle: "solid",
        borderWidth: 2.5,
        borderColor: AuntiesAlgosColorPalette.logoColor,
      }}
    >
      <UserIconFemale />
    </div>
  </div>;
};
