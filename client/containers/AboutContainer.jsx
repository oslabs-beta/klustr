import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import tempLogo from '../LogoDots.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 1000,
    height: 500,
    marginTop: 250,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    marginTop: 100,
  },
  cover: {
    width: 500,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      margin-top={1000}
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={8}>
        <Card id='aboutcard' className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={tempLogo}
            title='Live from space album cover'
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component='h5' variant='h5'>
                klustr
              </Typography>
              <br></br>
              <Typography variant='subtitle1' color='textSecondary'>
                <strong>version:</strong> 1.0.0
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                <strong>author:</strong> Team SPECKtacular
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                <strong>license:</strong> MIT
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                <strong>repository:</strong>
                <a href='https://github.com/oslabs-beta/klustr.git'>
                  {' '}
                  https://github.com/oslabs-beta/klustr.git
                </a>
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                <strong>website:</strong>
                <a href='https://klustr.app/'> https://klustr.app </a>
              </Typography>
              <br></br>
              <Typography variant='subtitle1' color='textSecondary'>
                © 2021 klustr / OSLabs. All rights reserved.
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
