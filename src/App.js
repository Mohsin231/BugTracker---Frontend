import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Sidebar from './components/sidebar';
import ViewBugs from './components/viewBugs';
import CreateBug from './components/createBug'

function App() {
  return (
  <Router>
  <div class="grid-container">

  <div class="side_bar">
    <Sidebar/>
    

  </div>

  <div class="main">
    
    <Route path='/dashboard'> <Dashboard/> </Route>
    

    <Route path='/viewbugs'><ViewBugs/></Route>

    <Route path='/createbug'><CreateBug/></Route>

    
    

  </div>

 </div>
 </Router>
  );
}

export default App;
