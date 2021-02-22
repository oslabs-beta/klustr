import React, { useState, useEffect } from 'react';
import BrokerBox from '../components/BrokerBox.jsx';
import TopicBox from '../components/TopicBox.jsx';
import ConsumersBox from '../components/ConsumersBox.jsx';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors/';

const useStyles = makeStyles({
  root: {
    backgroundColor: blue[500],
  },
  title: {
    fontSize: 30,
  },
});

function ClusterContainer({}) {
  // hooks
  // Cluster ID (string) ** Needs to be verified by Team 2 (need to be grabbed from describe cluster)
  // Brokers Info (Array of Objects)
  // Topics (Array of Strings)
  // Partitions (Array of Objects) ** May not be needed?
  // Offsets (Array of Objects)
  // Consumer Group (Array of Objects)
  // In object: Consumer ID
  const [clusterId, setClusterId] = useState('');
  const [brokers, setBrokers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [consumers, setConsumers] = useState([]);

  // Fetch - GET all metrics for Metrics Container upon putting in a Port Address in Dashboard Container

  const fetchTopics = () => {
    fetch('/admin/topics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTopics((topics) => {
          data = data.filter((topic) => topic !== '__consumer_offsets');
          topics = data;
          return topics;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchBrokerInfo = () => {
    fetch('/admin/brokerInfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json()) // object
      .then((data) => {
        setBrokers((brokers) => {
          brokers = data.brokers;
          return brokers;
        }); //brokers property, returns  [ { nodeId: 0, host: 'Cerebro', port: 9092 } ]
        setClusterId((clusterId) => {
          clusterId = data.clusterId;
          return clusterId;
        }); //clusterID property, returns '1_le6xdKSCuBQUa6duOmcg'
      })
      .catch((err) => console.log(err));
  };

  const fetchConsumerGroups = () => {
    fetch('/admin/consumerGroups', {
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
        setConsumers(data);
      }) // array of objects (consumers) [{'groupId': 'test-group' }]
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTopics();
    fetchBrokerInfo();
    fetchConsumerGroups();
  }, []);

  const StyledClusterDiv = styled.div`
    font-size: 1.8em;
    text-align: center;
    margin: 1em;
    padding: 0.25em 1em;
    height: 3em;
    border-radius: 10px;
    background-color: #00b4d8;
    box-shadow: 0 8px 6px -6px gray;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
  `;

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} align='center'>
            Connected to Kafka Cluster: {clusterId}
          </Typography>
        </CardContent>
      </Card>
      {/* <StyledClusterDiv className='grow'>
        {' '}
        Connected to Kafka Cluster: {clusterId}
      </StyledClusterDiv> */}
      <BrokerBox clusterId={clusterId} brokers={brokers} />
      <TopicBox topics={topics} />
      <ConsumersBox consumers={consumers} />
    </div>
  );
}

export default ClusterContainer;
