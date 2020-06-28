import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import loadable from '@loadable/component';


function App() {
  const antIcon = <LoadingOutlined style={{ fontSize: 100}} spin />;
  const HomePage = loadable(() => import("./pages/HomePage"),{
    fallback: (<Loading> <Spin indicator={antIcon} /> </Loading>),
  });
  
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => window.location.href="/CYBLOG"} />
          <Route exact path="/CYBLOG" component={HomePage} />
          <Route path="/CYBLOG/blog" component={() => (<div style={{ textAlign: "center", fontSize: "50px" }}>준비중...</div>)} />
        </Switch>
    </BrowserRouter>
    </>
  );
}
const Loading = styled.div `
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default App;
