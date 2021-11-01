import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Birthday from "./Birthday";
import RadioButton from "./RadioButton";
import MultipleSelect from "./MultipleSelect";
import MaskRegistration from "./Mask";
import genders from "../informations/genders";
import parentsGraduation from "../informations/parentsGraduation";
import lastSchoolYear from "../informations/lastSchoolYear";
import courses from "../informations/courses";
import quotas from "../informations/quotas";

const theme = createTheme();

function SignUp(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get("name"),
      userName: data.get("userName"),
      registration: data.get("registration"),
      course: data.get("course"),
      birthday: data.get("birthday"),
      email: data.get("email"),
      password: data.get("password"),
      gender: data.get("gender"),
      graduation: data.get("graduation"),
      school: data.get("school"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {props.name}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Usuário"
                  name="userName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MaskRegistration
                  mask="99/9999999"
                  disabled={false}
                  id="registration"
                  name="registration"
                  label="Matrícula"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MultipleSelect
                  id="course"
                  name="course"
                  label="Curso"
                  array={courses}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Birthday />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <MultipleSelect
                  id="quota"
                  name="quotas"
                  label="Cota"
                  array={quotas}
                />
              </Grid>
              <Grid item xs={12}>
                <RadioButton
                  array={genders}
                  type="Gênero"
                  label="gender"
                  name="gender"
                />
              </Grid>
              <Grid item xs={12} paddingTop="16px" paddingLeft="5px">
                <RadioButton
                  array={parentsGraduation}
                  type="Graduação dos Pais"
                  label="graduation"
                  name="graduation"
                />
              </Grid>
              <Grid item xs={12} paddingTop="16px" paddingLeft="5px">
                <RadioButton
                  array={lastSchoolYear}
                  type="Último Ano do Ensino Médio"
                  label="school"
                  name="school"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login-student" variant="body2">
                  Já tem cadastro? Entre
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
