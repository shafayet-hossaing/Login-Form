// import Box from '@mui/material/Box';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./components/Login/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/Login/NotFound/NotFound";
import Registration from './components/Login/Registration/Registration';



function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
