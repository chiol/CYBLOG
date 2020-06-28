import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from './pages';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/CYBLOG" component={HomePage} />
        <Route path="/CYBLOG/blog" component={()=>(<div style={{textAlign:"center", fontSize:"50px"}}>준비중...</div>)} />
        <Redirect to="/CYBLOG"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
