import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './containers/SidebarContainer.jsx';
import Welcome from './containers/WelcomeContainer.jsx';
import ClusterContainer from './containers/ClusterContainer.jsx';
import MetricsContainer from './containers/MetricsContainer.jsx';
import ClusterNodeContainer from './containers/ClusterNodeContainer.jsx';
import About from './containers/AboutContainer.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Styling
const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// top level componenet for klustr
function App() {
  const [redirect, setRedirect] = useState(false);
  const [jMXPort, setJMXPort] = useState('');
  let display;

  // if required port addresses are given, user is redirected automatically to the Cluster Overview
  if (!redirect) {
    display = (
      <Route exact path='/'>
        <Welcome setRedirect={setRedirect} setJMXPort={setJMXPort} />
      </Route>
    );
  } else {
    display = (
      <Route exact path='/'>
        <ClusterContainer setRedirect={setRedirect} />
      </Route>
    );
  }

  const classes = useStyles();

  // Routers
  return (
    <div className={classes.container}>
      <div className={classes.drawer}>
        <Sidebar setRedirect={setRedirect} />
      </div>
      <div className={classes.content}>
        <Switch>
          {display}
          <Route exact path='/'>
            <Welcome setRedirect={setRedirect} setJMXPort={setJMXPort} />
          </Route>
          <Route path='/cluster'>
            <ClusterContainer setRedirect={setRedirect} />
          </Route>
          <Route path='/metrics'>
            <MetricsContainer setRedirect={setRedirect} jMXPort={jMXPort} />
          </Route>
          <Route path='/brokerView'>
            <ClusterNodeContainer setRedirect={setRedirect} />
          </Route>
          <Route path='/about'>
            <About setRedirect={setRedirect} />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
