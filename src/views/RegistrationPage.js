import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, FormLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState({
    street: '',
    apt: '',
    city: '',
    state: '',
    zipcode: ''
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    // prevent the page from being refesh
    e.preventDefault();

    const organizationData = {name, address};
    console.log(organizationData); 

    axios.post('http://localhost:3001/api/organizations', organizationData, {
      headers: { "Content-Type": "application/json" }
    })
    .then( (response) => {
      console.log(response);
      history.push('/login');
    })
    .catch(function (error) {
      console.log(error);
      history.push('/error');
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          CREATE ORGANIZATION
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormLabel>Organization name</FormLabel>
            <TextField
              required
              variant="outlined"
              id="organizationName"
              name="organizationName"
              label="Organization name"
              fullWidth
              value={name}
              onChange={ e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Code</FormLabel>
            <TextField
              variant="outlined"
              id="code"
              name="code"
              label="Code"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>MSH.4 Value</FormLabel>
            <TextField
              variant="outlined"
              id="MSH4Value"
              name="MSH4Value"
              label="MSH.4 Value"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" fullWidth>
              ADD MORE MSH.4 VALUE
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>OID</FormLabel>
            <TextField
              variant="outlined"
              id="oid"
              name="oid"
              label="OID"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>NIP Number</FormLabel>
            <TextField
              variant="outlined"
              id="nip"
              name="nip"
              label="NIP Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>MRN Pool OID</FormLabel>
            <TextField
              variant="outlined"
              id="mrnPoolOID"
              name="mrnPoolOID"
              label="MRN Pool OID"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Address</FormLabel>
            <TextField
              required
              variant="outlined"
              id="street"
              name="street"
              label="Street"
              fullWidth
              value={address.street}
              onChange={(e)=> {
                setAddress(prevAddress => {
                  return {...prevAddress, street: e.target.value};
                });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              id="as"
              name="as"
              label="Apt / Suite"
              fullWidth
              autoComplete="shipping address-line2"
              value={address.apt}
              onChange={(e)=> {
                setAddress(prevAddress => {
                  return {...prevAddress, apt: e.target.value};
                });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              value={address.city}
              onChange={(e)=> {
                setAddress(prevAddress => {
                  return {...prevAddress, city: e.target.value};
                });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              id="state"
              name="state"
              label="State"
              fullWidth
              value={address.state}
              onChange={(e)=> {
                setAddress(prevAddress => {
                  return {...prevAddress, state: e.target.value};
                });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              variant="outlined"
              id="zip"
              name="zip"
              label="Zipcode"
              fullWidth
              value={address.zipcode}
              onChange={(e)=> {
                setAddress(prevAddress => {
                  return {...prevAddress, zipcode: e.target.value};
                });
              }}
            />
          </Grid>
        </Grid>
        <Button
        component={Link}
        to="/organizations"
        variant="contained"
      >
        cancel
      </Button>
      <Button type="submit" variant="contained" color="primary">
        create
      </Button>
      </form>
    </Container>
  );
};

export default RegistrationPage;
