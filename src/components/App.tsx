import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Clothes from './Clothes';

// アプリケーションのルートコンポーネント
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clothes" component={Clothes} />
      </Switch>
    </Router>
  );
};

export default App;
