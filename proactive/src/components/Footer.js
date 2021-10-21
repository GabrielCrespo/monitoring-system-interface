import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
//import CopyrightIcon from "@material-ui/icons/Copyright";
//import useStyles from "../styles";

// const Footer = () => {
//   const classes = useStyles();
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       className={classes.box}
//     >
//       <footer className={classes.footer}>
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography variant="subtitle1" align="center" color="textSecondary">
//           Algo que dê propósito ao Footer
//         </Typography>
//       </footer>
//     </Box>
//   );
// };

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "29vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.mode.anchor,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h6" align="center">
            Departamento de Ciência da Computação.
          </Typography>
          <Typography variant="subtitle1" align="center">
            Universidade de Brasília.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
//export default Footer;
