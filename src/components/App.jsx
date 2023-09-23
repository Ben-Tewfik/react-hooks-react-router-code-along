import { Switch, Route } from "react-router-dom";
import NavBar from "./Navbar";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SingUp";
import Messages from "./Messages";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
