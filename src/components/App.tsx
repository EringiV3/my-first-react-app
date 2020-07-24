import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClothList from './pages/ClothList';
import Top from './pages/Top';

// アプリケーションのルートコンポーネント
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/clothes" component={ClothList} />
      </Switch>
    </Router>
  );
};

export default App;
