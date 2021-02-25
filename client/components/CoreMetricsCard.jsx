import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { indigo, blue } from '@material-ui/core/colors/';

const useStyles = makeStyles({
  root: {
    width: 400,
    maxWidth: 350,
    height: 250,
    backgroundColor: indigo[300],
  },
  title: {
    fontSize: 20,
    marginTop: 40,
  },
  body2: {
    fontSize: 50,
    marginBottom: 10,
  },
});

// displays core metric in a box
export default function CoreMetricsCard({ metric, name }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} align='center'>
          {name}
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <Typography className={classes.body2} align='center'>
          {metric}
        </Typography>
      </CardContent>
    </Card>
  );
}
