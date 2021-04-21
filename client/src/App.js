import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import RegistrationPage from "./views/RegistrationPage";
import ErrorPage from "./views/ErrorPage";
import OrganizationsPage from "./views/OrganizationsPage";
import NotFound from "./views/NotFound";
import Footer from "./views/Footer";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <Container>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/organizations">
          <OrganizationsPage />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Route exact path="/error">
          <ErrorPage />
        </Route>
        {/* catch any other route */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;