//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Game from './containers/Game/Game';
import Games from './containers/Games/Games';

import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/games" component={Games} />
            <Route path="/" exact component={Game} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;