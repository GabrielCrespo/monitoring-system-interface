import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SchoolIcon from "@material-ui/icons/School";
import useStyles from "../styles";

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to="/" className={classes.headerLink}>
            <SchoolIcon className={classes.icon} />
            <Typography variant="h6">Monitoria Proativa</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
