import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';




function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const antIcon = <LoadingOutlined style={{ fontSize: 100}} spin />;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading> <Spin indicator={antIcon} /> </Loading>}>
        <Switch>
          <Route exact path="/CYBLOG" component={HomePage} />
          <Route path="/CYBLOG/blog" component={() => (<div style={{ textAlign: "center", fontSize: "50px" }}>준비중...</div>)} />
          <Redirect to="/CYBLOG" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
const Loading = styled.div `
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh
`

export default App;
