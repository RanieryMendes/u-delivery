import './App.css';
import Home from './components/Home'
import Client from './components/Client'
import SuccessPage from './components/SuccessPage'
import StudentDeliverier from './components/StudentDeliverier'
import { BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'


function App() {
  return (

    <Router>
        <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/client">
              <Client />
            </Route>
            <Route path="/carrier">
              <StudentDeliverier />
            </Route>

            <Route path="/success/:order">
                  <SuccessPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
