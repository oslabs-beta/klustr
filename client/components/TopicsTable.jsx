import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { pink } from '@material-ui/core/colors/';

// Material UI Styling
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  head: {
    fontWeight: 'bold',
  },
  topic: {
    backgroundColor: pink[200],
    paddingLeft: 10,
  },
});

// child component to fetch Topic partition and offsets
function Row({ topic }) {
  console.log('topic:', topic);
  const [open, setOpen] = useState(false);
  const [offsets, setOffsets] = useState([]);

  const fetchOffsets = () => {
    fetch(`/admin/partitionInfo/${topic}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setOffsets(data.offsets);
      }) // returns an array of partition objects ([{"partition": 0,"offset": "21"}])
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchOffsets();
  }, []);

  const classes = useRowStyles();

  // components that hold collapsed information in table
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {topic}
        </TableCell>
        <TableCell align='left'>{offsets.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography
                className={classes.topic}
                variant='h6'
                gutterBottom
                component='div'
              >
                <strong>{topic}</strong>
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.head}>
                      Partition Name
                    </TableCell>
                    <TableCell className={classes.head}>
                      Current Offset
                    </TableCell>
                    <TableCell className={classes.head}>High</TableCell>
                    <TableCell className={classes.head}>Low</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {offsets.map((offset) => (
                    <TableRow key={offset.partition}>
                      <TableCell component='th' scope='row'>
                        {offset.partition}
                      </TableCell>
                      <TableCell>{offset.offset}</TableCell>
                      <TableCell>{offset.high}</TableCell>
                      <TableCell>{offset.low}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Collapsible Table for Topics

export default function TopicsTable({ topics }) {
  const classes = useRowStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className={classes.head} align='left'>
              Topic Name
            </TableCell>
            <TableCell className={classes.head} align='left'>
              Number of Partitions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topics.map((topic) => (
            <Row key={topic} topic={topic} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
