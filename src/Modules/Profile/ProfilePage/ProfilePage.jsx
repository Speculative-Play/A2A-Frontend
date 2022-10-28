//Packages
import React, {useState} from "react";
import styled from "styled-components";

//Source Code
import AccordionsSection from "./AccordionsSection";
import PersonalInfo from "./PersonalInfo";
import AuntiesAlgosColorPalette from "../../../Components/AuntiesAlgosColorPalette";
import { HeaderBar } from "../../../Components/HeaderBar";

const ProfilePage = (props) => {
  const links = [
    { linkName: "Parents", link: "/parent-stars" },
    { linkName: "Matches", link: "/get-match" },
    { linkName: "Logout", link: "/" },
  ];

  const [edit, setEdit] = useState(false);


  return (
    <div>
      <HeaderBar links={links} />
      <ScreenBackground>
        <div className="card-border bg-white" style={{ marginBottom: "5%" }}>
          <PersonalInfo editCallback={setEdit}/>
        </div>
        {!edit && 
        <AccordionsSection /> }
      </ScreenBackground>
    </div>
  );
};

//Styling
const ScreenBackground = styled.div`
  background-color: ${AuntiesAlgosColorPalette.background};
  padding: 1vh 15vw;
`;

export default ProfilePage;
