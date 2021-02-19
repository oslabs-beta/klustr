import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer.jsx';
import ClusterContainer from './containers/ClusterContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
import Welcome from './components/Welcome.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import styled, { css } from 'styled-components';

function App() {
  const [redirect, setRedirect] = useState(false);

  let display;

  if (!redirect) {
    display = <Route exact path='/' component={Welcome} />;
  } else {
    display = <Route exact path='/' component={ClusterContainer} />;
  }

  return (
    <StyledMain>
      <StyledDashboard>
        <DashboardContainer setRedirect={setRedirect} />
      </StyledDashboard>
      <StyledPage>
        <Switch>
          {display}
          <Route path='/cluster' component={ClusterContainer} />
          <Route path='/metrics' component={MetricsContainer} />
          {/* <Route path='/about' component={About} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </StyledPage>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledDashboard = styled.div`
  width: 20%;
`;

const StyledPage = styled.div`
  width: 80%;
`;

export default App;
