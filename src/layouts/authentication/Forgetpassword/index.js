import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/issatso.png";

function Cover() {
  return (
    <CoverLayout image={bgImage}>
    <MDBox display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ marginLeft: "auto", marginRight: "auto" }}>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-6}
          p={3.5}
          mb={3}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Forgot Your Password?
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email address below to reset your password.
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Reset Password
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Remembered your password?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
    <MDBox mt={-3} mb={5} textAlign="center">
      <MDTypography variant="caption" color="text">
        &copy; 2024 Creative Tim. All rights reserved.
      </MDTypography>
    </MDBox>
  </CoverLayout>
  );
}

export default Cover;