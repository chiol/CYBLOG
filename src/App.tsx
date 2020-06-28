import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/blog" component={()=>(<div style={{textAlign:"center", fontSize:"50px"}}>준비중...</div>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
