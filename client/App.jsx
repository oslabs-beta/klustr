import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardContainer from './containers/DashboardContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
import Welcome from './components/Welcome.jsx';
import ErrorPage from './components/ErrorPage.jsx';

function App() {
  const [redirect, setRedirect] = useState(false);

  let display;

  if (!redirect) {
    display = <Route exact path='/' component={Welcome} />;
  } else {
    display = <Route exact path='/' component={MetricsContainer} />;
  }

  return (
    <main>
      <DashboardContainer setRedirect={setRedirect} />
      <Switch>
        {display}
        {/* <Route path='/metrics' component={MetricsContainer} /> */}
        {/* <Route path='/about' component={About} /> */}
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
