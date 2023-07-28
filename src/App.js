import { hot } from 'react-hot-loader';
import './App.css';
import Login from './pages/Login';
import Cards from './pages/Cards';
import Profile from './pages/Profile';
import { Route, Router } from 'wouter';
import connect from './utils/polkadot'
import { useState, useEffect, useContext, useMemo } from 'react';
import 'antd/dist/antd.css';
import { store } from './components/PolkadotProvider';
import usePolkadot from './hooks/usePolkadot';

const App = () => {
  const { polkadotState, dispatch } = useContext(store);
  const { console_info } = usePolkadot();

  const connectAPI = async () => {
    const api = await connect();
    api.on('error', (error) => {
      console.error('API error: ', error);
    });

    dispatch({
      type: 'setAPI',
      payload: api,
    });
  };

  useEffect(
    () => {
      connectAPI();
   
      // setInjector();
    },
    [dispatch],
  );

  const isAPIReady = useMemo(
    () => polkadotState?.api?.isConnected && polkadotState?.api?.isReady,
    [polkadotState],
  );

  useEffect(
    () => {
      if (isAPIReady){
        // console.log("ready");
      //  console_info();
      }
    },
    [isAPIReady],
  );

  return (
    
      <Router>
        <Route path='/' component={Cards}/>
        <Route path='/login' component={Login}/>
        <Route path='/profile' component={Profile}/>
      </Router>
   
  );
}

export default hot(module)(App);

