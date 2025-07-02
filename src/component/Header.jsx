import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <AppBar position="static" sx={{ bgcolor: "red" }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Holy Ghost College 08 Set - Business Album
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
