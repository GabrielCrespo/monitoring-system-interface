import Home from "./pages/Home";
import LoginStudent from "./pages/Student/LoginStudent";
import LoginTeacher from "./pages/Teacher/LoginTeacher";
import LoginMonitor from "./pages/Monitor/LoginMonitor";
import LoginTutor from "./pages/Tutor/LoginTutor";
import signUpStudent from "./pages/Student/SignUpStudent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login-student" exact component={LoginStudent} />
          <Route path="/login-teacher" exact component={LoginTeacher} />
          <Route path="/login-monitor" exact component={LoginMonitor} />
          <Route path="/login-tutor" exact component={LoginTutor} />
          <Route path="/signup-student" exact component={signUpStudent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
