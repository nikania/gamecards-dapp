import './App.css';
import Login from './pages/Login';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import { Route, Router } from 'wouter';
import connect from './utils/polkadot'
import { useEffect } from 'react';
import 'antd/dist/antd.css';

const App = () => {
  const create_api = async () => {
    const api = await connect();
    console.log(api.genesisHash.toHex());
  };

  useEffect(() => {
    create_api();
  });
 
  return (
    <Router>
      <Route path='/' component={Cards}/>
      <Route path='/login' component={Login}/>
      <Route path='/profile' component={Profile}/>
    </Router>   
  );
}

export default App;
