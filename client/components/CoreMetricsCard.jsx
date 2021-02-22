import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cyan } from '@material-ui/core/colors/';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 350,
    height: 250,
    backgroundColor: cyan[100],
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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

export default function CoreMetricsCard({ metric, name }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} align='center'>
          {name}
        </Typography>
        <br></br>
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
