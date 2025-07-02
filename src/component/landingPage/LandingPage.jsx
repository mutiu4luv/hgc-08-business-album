import React from "react";
import Header from "../Header";
import BusinessCard from "./BusinessCard";
import { Box, Container, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to the Holy Ghost College 08 Set Business Album
          </h1>
        </div>
      </main>
      <BusinessCard />
      <footer>
        <Box sx={{ bgcolor: "red", color: "white", py: 3 }}>
          <Container maxWidth="md">
            <Typography
              variant="body2"
              align="center"
              sx={{ fontWeight: 500, letterSpacing: 0.5 }}
            >
              &copy; {new Date().getFullYear()}{" "}
              <strong>Holy Ghost College 08 Set</strong>. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </footer>
    </div>
  );
};

export default LandingPage;
