//Packages
import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import SampleData from "./SampleData";


//Component
function PersonalInfo(props) {
  const [editProfile, setEditProfile] = useState(false);
  const [data, setData] = useState(SampleData);

  function handleEditProfile() {
    setEditProfile(!editProfile);
    console.log(editProfile);
  }

  function PageHeading() {
    return (
        <h4
          className="user-title"
          style={{
            paddingLeft: "4%",
            fontFamily: "Fira Sans",
          }}
        >
          Personal Information
        </h4>
    );
  }

  function ProfilePictureAndName() {
    return (
      <Grid item xs={12} sm={4} md={3}>
        <div className="left-side-padding">
          <div>
            <img
              className="full-width profile-image"
              src={data.picture}
              alt="Profile Picture"
            />
          </div>
          <div>
            <h3 className="profile-name">{data.name}</h3>
          </div>
          <div>
            <Button
              className="edit-profile-button"
              onClick={handleEditProfile}
              style={{ width: "100%" }}
            >
              {editProfile ? "Save" : "Edit Profile"}
            </Button>
          </div>
        </div>
      </Grid>
    );
  }

  function ProfileDataGrid() {
    function ParseDate(dateString) {
      let parsedDate = "";

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const splitDate = dateString.split("-");
      parsedDate += months[splitDate[1] - 1] + " " + splitDate[0];
      parsedDate += ", " + splitDate[2];

      return parsedDate;
    }

    function ProfileData(props) {
      return (
        <Grid item xs={6} sm={4} md={4} className="txt-left ">
          <div
            className="grey-txt profile-option-label txt-size-regular"
            style={{ fontFamily: "Fira Sans" }}
          >
            {props.name}
          </div>
          <div
            className="dark-grey-txt semi-bold txt-size-regular"
            style={{ fontFamily: "Fira Sans" }}
          >
            {props.data}
          </div>
        </Grid>
      );
    }
    return (
      <Grid item xs={12} sm={8} md={9} >
        <Grid container spacing={9} justifyContent="flex-start">
          <ProfileData name={"Gender"} data={data.gender} />
          <ProfileData name={"Birth Country"} data={data.birth_country} />
          <ProfileData name={"Date of Birth"} data={ParseDate(data.date_of_birth)} />
          <ProfileData name={"City"} data={data.city} />
          <ProfileData name={"Marital Status"} data={data.marital_status} />
          <ProfileData name={"Languages"} data={data.languages.join(", ")} />
          <ProfileData name={"Country of Residence"} data={data.country} />
        </Grid>
      </Grid>
    );
  }

  return (
    <div className="personal-info">
      <div style={{textAlign: "center", fontFamily: "Fira Sans"}}>
        <PageHeading />

      </div>
      <Grid container>
        <ProfilePictureAndName />
        <ProfileDataGrid />
      </Grid>
    </div>
  );
}

export default PersonalInfo;
