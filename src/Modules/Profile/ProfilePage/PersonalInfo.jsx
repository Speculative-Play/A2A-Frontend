//Packages
import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import SampleData from "./SampleData";

//Component
function PersonalInfo(props) {
  const [editProfile, setEditProfile] = useState(false);
  const [data, setData] = useState(SampleData);

  function handleEditProfile() {
    props.editCallback(!editProfile)
    setEditProfile(!editProfile);
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
        {editProfile ? "Edit Profile" : "Personal Information"}
      </h4>
    );
  }

  const EditProfileButton = (props) => {
    return (
      <Button
        className="edit-profile-button"
        onClick={handleEditProfile}
        style={{ width: "80%" }}
      >
        {editProfile ? "Save" : "Edit Profile"}
      </Button>
    );
  };

  const ProfilePicture = (props) => {
    return (
      <img
        className="profile-image"
        src={data.picture}
        alt="Profile Picture"
        style={{ marginBottom: 10, width: 200, height: 200 }}
      />
    );
  };

  const ProfilePictureAndName = (props) => {
    return (
      <Grid item xs={12} sm={4} md={3}>
        <div
          className="left-side-padding"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 className="profile-name">{data.name}</h3>
          <ProfilePicture />
          <EditProfileButton />
        </div>
      </Grid>
    );
  };

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
  const ProfileDataGrid = (props) => {
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
      <Grid item xs={12} sm={8} md={9}>
        <Grid container spacing={9} justifyContent="flex-start">
          <ProfileData name={"Gender"} data={data.gender} />
          <ProfileData name={"Birth Country"} data={data.birth_country} />
          <ProfileData
            name={"Date of Birth"}
            data={ParseDate(data.date_of_birth)}
          />
          <ProfileData name={"City"} data={data.city} />
          <ProfileData name={"Marital Status"} data={data.marital_status} />
          <ProfileData name={"Languages"} data={data.languages.join(", ")} />
          <ProfileData name={"Country of Residence"} data={data.country} />
        </Grid>
      </Grid>
    );
  };
  const EditProfilePage = (props) => {
    const EditField = (props) => {
      return (
        <TextField
          // onChange={handleChange("name")}
          // id="outlined-full-width-name"
          label={props.name}
          value={props.data}
          placeholder={props.data ? props.data : "Enter Your Name"}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      );
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <EditField name={"Name"} data={data.name} />
        <EditField name={"Gender"} data={data.gender} />
        <EditField name={"Birth Country"} data={data.birth_country} />
        <EditField
          name={"Date of Birth"}
          data={ParseDate(data.date_of_birth)}
        />
        <EditField name={"City"} data={data.city} />
        <EditField name={"Marital Status"} data={data.marital_status} />
        <EditField name={"Languages"} data={data.languages.join(", ")} />
        <EditField name={"Country of Residence"} data={data.country} />
      </div>
    );
  };

  return (
    <div className="personal-info">
      <div style={{ textAlign: "center", fontFamily: "Fira Sans" }}>
        <PageHeading />
        {!editProfile && (
          <Grid container>
            <ProfilePictureAndName />
            <ProfileDataGrid />
          </Grid>
        )}

        {editProfile && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProfilePicture />
            <EditProfilePage />
            <EditProfileButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;
