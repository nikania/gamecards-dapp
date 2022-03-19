import './App.css';
import Login from './pages/Login';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import { Route, Router } from 'wouter';

const App = () => {
  return (
    <Router>
      <Route path='/' component={Cards}/>
      <Route path='/login' component={Login}/>
      <Route path='/profile' component={Profile}/>
    </Router>   
  );
}

export default App;
