import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  error: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
}));

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.error}>
      <Navbar path="login" />
      <Typography variant="h2" gutterBottom color="secondary">
        An error occured
      </Typography>
      <Link to="/">Back to the homepage...</Link>
    </Container>
  );
};

export default ErrorPage;
