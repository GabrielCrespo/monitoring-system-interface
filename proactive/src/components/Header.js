import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import SchoolIcon from "@material-ui/icons/School";
import useStyles from "../styles";

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SchoolIcon className={classes.icon} />
          <Typography variant="h6">Monitoria Proativa</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
