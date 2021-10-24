import Home from "./pages/Home";
import LoginStudent from "./pages/LoginStudent";
import LoginTeacher from "./pages/LoginTeacher"
import LoginMonitor from "./pages/LoginMonitor"
import LoginTutor from "./pages/LoginTutor"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup-student' exact component={LoginStudent} />
          <Route path='/signup-teacher' exact component={LoginTeacher} />
          <Route path='/signup-monitor' exact component={LoginMonitor} />
          <Route path='/signup-tutor' exact component={LoginTutor} />
        </Switch>
     </Router>
    </>
  );
}

export default App;
