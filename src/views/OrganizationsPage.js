import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import OrganizationList from "../components/OrganizationList";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  organizations: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const OrganizationsPage = () => {
  const [isPending, setIsPending] = useState(true);
  const [organizations, setOrganizations] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/organizations")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setIsPending(false);
        setOrganizations(data);
      })
      .catch(function (error) {
        // handle error
        setIsPending(false);
        console.log(error);
      });
  }, []);

  return (
    <Container className={classes.organizations}>
      <Navbar path="organizations" />
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Organizations
      </Typography>
      <Button component={Link} to="/registration" variant="contained">
        CREACTE NEW ACCOUNT
      </Button>
      {isPending && (
        <Typography component="h2" variant="h6" color="secondary" gutterBottom>
          Loading...
        </Typography>
      )}
      {organizations && <OrganizationList organizations={organizations} />}
    </Container>
  );
};

export default OrganizationsPage;
