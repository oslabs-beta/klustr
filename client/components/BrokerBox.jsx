import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BrokerTable({ brokers }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Broker ID</TableCell>
            <TableCell align='right'>Host</TableCell>
            <TableCell align='right'>Port</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brokers.map((broker) => (
            <TableRow key={`broker${nodeID}`}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from 'react';
// import Broker from './Broker.jsx';
// import styled, { css } from 'styled-components';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import { blue } from '@material-ui/core/colors/';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 200,
//     maxWidth: 350,
//     height: 250,
//     backgroundColor: blue[100],
//   },
//   title: {
//     fontSize: 20,
//     marginTop: 40,
//   },
//   body2: {
//     fontSize: 50,
//     marginBottom: 10,
//   },
// });

// function BrokerBox({ brokers }) {
//   // const [brokers, setBrokers] = useState([])

//   const classes = useStyles();

//   // display all broker components
//   const brokersArray = [];

//   for (let i = 0; i < brokers.length; i++) {
//     brokersArray.push(
//       <>
//         <Card className={classes.root}>
//           <CardContent>
//             <Typography className={classes.title} align='center'>
//               Brokers
//             </Typography>
//             <br></br>
//             <br></br>
//             <br></br>
//             <Typography className={classes.body2} align='center'>
//               Total Number:
//               <br></br>
//               {brokers.length}
//             </Typography>
//           </CardContent>
//         </Card>
//       </>
//     );
//   }

//   const BrokerBoxDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//   `;

//   return <BrokerBoxDiv>{brokersArray}</BrokerBoxDiv>;
// }

// export default BrokerBox;
