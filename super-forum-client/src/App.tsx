import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import LeftMenu from './components/areas/LeftMenu';
import Main from './components/areas/main/Main';
import Nav from './components/areas/Nav';
import RightMenu from './components/areas/rightMenu/RightMenu';
import SideBar from './components/areas/sidebar/SideBar';

import Home from './components/routes/Home';

function App() {
  const renderHome = (props: any) => <Home {...props} />;
  return (
    <Switch>
      <Route exact={true} path="/" render={renderHome} />
      <Route path="/categorythreads/:categoryId" render={renderHome} />
    </Switch>
  );
}

export default App;
