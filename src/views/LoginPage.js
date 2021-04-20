import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  login: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: theme.spacing(8),
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const validateSubmit = (e) => {
    // prevent the page from being refesh
    e.preventDefault();

    const loginData = { email, password };

    axios
      .post("http://localhost:3001/api/login-user", loginData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        history.push("/organizations");
      })
      .catch(function (error) {
        console.log(error);
        history.push("/error");
      });
  };

  return (
    <React.Fragment>
      <Navbar path="login" />
      <Container component="main" maxWidth="xs" className={classes.login}>
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Log into your account
        </Typography>
        <form className={classes.form} noValidate onSubmit={validateSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default LoginPage;
