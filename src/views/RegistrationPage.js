import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, FormLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const RegistrationPage = () => {
  return (
    <Container>
    <form>
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
          <Button variant="contained" color="purple" fullWidth>
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
          />
        </Grid>
      </Grid>
    </form>
    <Button
    type="submit"
    variant="contained"
  >
    cancel
  </Button>
  <Button
    type="submit"
    variant="contained"
    color="primary"
  >
    create
  </Button>
  </Container>
  );
};

export default RegistrationPage;
