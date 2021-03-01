import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Sidebar from './views/sidebar';
import ViewBugs from './views/viewBugs';

function App() {
  return (
  <Router>
  <div class="grid-container">

  <div class="side_bar">
    <Sidebar/>
    

  </div>

  <div class="main">
    <Dashboard/> 
    <Switch>

    <Route path='/viewbugs'><ViewBugs/></Route>

    </Switch>
    

  </div>

 </div>
 </Router>
  );
}

export default App;
