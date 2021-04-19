import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

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
    <div className={classes.error}>
      <Typography variant="h2" gutterBottom color="secondary">
        An error occured
      </Typography>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default ErrorPage;
