import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Dashboard from "./pages/Dashboard";
import Kudoboard from "./pages/Kudoboard";
import Error from "./pages/Error";
// import components
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/kudoboard/:id">
          <Kudoboard />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
