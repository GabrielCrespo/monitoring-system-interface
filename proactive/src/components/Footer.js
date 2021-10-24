import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "../styles";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "29vh",
      }}
    >
      <CssBaseline />
      <Box className={classes.footer} component="footer">
        <Container maxWidth="sm">
          <Typography
            variant="h6"
            align="center"
            sx={{
              typography: {
                fontSize: 18,
              },
            }}
          >
            Departamento de Ciência da Computação
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              typography: {
                fontSize: 15,
              },
            }}
          >
            Universidade de Brasília
          </Typography>
          <Typography
            align="center"
            sx={{
              typography: {
                fontSize: 13,
              },
            }}
          >
            Copyright <CopyrightIcon className={classes.copyRightIcon} />{" "}
            {new Date().getFullYear().toString()}. All rights reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
