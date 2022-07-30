import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ViewCart from './components/ViewCart/ViewCart'
import MyOrders from './components/MyOrders/MyOrders'

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={ViewCart} />
          <Route path="/myOrders" component={MyOrders} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
