import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Dashboard from "./pages/Dashboard";
import Kudoboard from "./pages/Kudoboard";
import HowItWorks from "./pages/HowItWorks";
import Error from "./pages/Error";
import ScrollToTop from "./components/ScrollToTop";
// import components
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/kudoboard/:id">
          <Kudoboard />
        </Route>
        <Route path="/howitworks">
          <HowItWorks />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
