import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
import Welcome from './components/Welcome.jsx';
import ErrorPage from './components/ErrorPage.jsx';

function App() {
  return (
    <main>
      <DashboardContainer />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/metrics' component={MetricsContainer} />
        {/* <Route path='/about' component={About} /> */}
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
