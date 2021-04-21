import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  appbar: {
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({path}) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar} color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="secondary">
            Vynca
          </Typography>
          <Button component={Link} to={"/"+path} >{path}</Button>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
