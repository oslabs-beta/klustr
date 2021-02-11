import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
import Welcome from './components/Welcome.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import styled, { css } from 'styled-components';

function App() {
  const [redirect, setRedirect] = useState(false);

  return (
    <StyledMain>
      <StyledDashboard>
        <DashboardContainer setRedirect={setRedirect} />
      </StyledDashboard>
      <Switch>
        if (!redirect) {<Route exact path='/' component={Welcome} />}
        else {<Route exact path='/' component={MetricsContainer} />}
        <Route path='/metrics' component={MetricsContainer} />
        {/* <Route path='/about' component={About} /> */}
        <Route component={ErrorPage} />
      </Switch>
    </StyledMain>
  );
}

const StyledMain = styled.div`
display: flex;
flex:direction:row;
flex-wrap: wrap;
`;

const StyledDashboard = styled.div`
  width: 25%;
`;

export default App;
