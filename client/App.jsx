import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer.jsx';
import ClusterContainer from './containers/ClusterContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
import Welcome from './components/Welcome.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import styled, { css } from 'styled-components';

import ClusterNodeContainer from './components/ClusterNodeContainer.jsx';

function App() {
  const [redirect, setRedirect] = useState(false);

  let display;

  if (!redirect) {
    display = (
      <Route exact path='/'>
        <Welcome setRedirect={setRedirect} />
      </Route>
    );
  } else {
    display = (
      <Route exact path='/'>
        <ClusterContainer setRedirect={setRedirect} />
      </Route>
    );
  }

  // setOnMetricsPage={setOnMetricsPage}

  return (
    <StyledMain>
      <StyledDashboard>
        <DashboardContainer setRedirect={setRedirect} />
      </StyledDashboard>
      <StyledPage>
        <Switch>
          {display}
          <Route path='/cluster'>
            <ClusterContainer setRedirect={setRedirect} />
          </Route>
          <Route path='/metrics'>
            <MetricsContainer setRedirect={setRedirect} />
          </Route>
          <Route path='/brokerView'>
            <ClusterNodeContainer setRedirect={setRedirect} />
          </Route>
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
