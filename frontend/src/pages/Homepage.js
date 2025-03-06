import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Button } from "@mui/material";
import styled from "styled-components";
import Students from "../assets/students.svg";
import { DarkRedButton, LightPurpleButton } from "../components/buttonStyles";

const Homepage = () => {
  return (
    <StyledContainer>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledPaper elevation={3}>
            <StyledTitle>Welcome to School Management System</StyledTitle>
            <StyledText>
              Our school management system is an all-in-one platform that
              streamlines every aspect of school operations, from attendance
              tracking and grading to communication and administrative tasks. It
              provides real-time attendance monitoring, automated notifications,
              and detailed student profiles, while also offering tools for exam
              scheduling, result management, and financial tracking.<br></br><br></br> The system
              enhances collaboration through integrated messaging,
              parent-teacher communication, and easy access to class resources.
              With customizable reporting, secure data management, and seamless
              integration with other systems, it helps administrators,
              educators, and parents stay informed and efficient, ultimately
              fostering a more organized and productive educational environment.
            </StyledText>
            <StyledBox>
              <StyledLink to="/choose">
                <DarkRedButton variant="contained" fullWidth>
                  Get Started Now
                </DarkRedButton>
              </StyledLink>
            </StyledBox>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled.div`
  padding: 24px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
