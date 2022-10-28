//Packages
import { Button, Box } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";
import { useLottie } from "lottie-react";

//Source code
import ScreenContainer from "../../../Components/ScreenContainer";
import Title from "../../../Components/Title";
import CenteredDiv from "../../../Components/CenteredDiv";
import CenteredP from "../../../Components/CenteredP";
import Heading from "../../../Components/Heading";
import AuntiesAlgosColorPalette from "../../../Components/AuntiesAlgosColorPalette";
import * as JSONanimation from "../../../assets/compile.json";
import Animation from "../../../Components/Animation";

//Component
export default function LandingPage(props) {
  return (
    <ScreenContainer>
      <Animation animationFile={JSONanimation} />

      <CenteredDiv>
        <p>Pie Chart: Giving weighted preference to different blocks.</p>
        <p>Explore how to have different amount of personal agency.</p>
      </CenteredDiv>

      <CenteredDiv>
        <p>
          Addressing User's Pain Points: Mitigating the tension between the
          wants of Children vs Parents vs Society.
        </p>
      </CenteredDiv>

      <CenteredDiv>
        <p>
          Similar stuff like other websites, just the way you choose to work
          with them is different (we are not radical)
        </p>
      </CenteredDiv>

      <CenteredDiv>
        <p>Privacy and Visibility Options</p>
        <p>Who you are and how you wish to be represented</p>
      </CenteredDiv>

      <Heading>Start Free Today! SIGN UP</Heading>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ m: 3 }}
      >
        <Link
          to="/onboarding"
          style={{
            textDecoration: "none",
            color: AuntiesAlgosColorPalette.bodyText,
          }}
        >
          <Button variant="contained">I'm a User looking for a match</Button>
        </Link>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Button variant="contained">
          {" "}
          <Link
            to="/onboarding-parent"
            style={{
              textDecoration: "none",
              color: AuntiesAlgosColorPalette.bodyText,
            }}
          >
            I'm a Parent helping my child find a match{" "}
          </Link>{" "}
        </Button>
      </Box>

      <CenteredP>
        Already have an account?{" "}
        <Link to="/auth" style={{ textDecoration: "none" }}>
          Log In
        </Link>{" "}
      </CenteredP>
    </ScreenContainer>
  );
}
