import React, { useState, useEffect } from 'react';
import BrokerBox from '../components/BrokerBox.jsx';
import TopicBox from '../components/TopicBox.jsx';
import ConsumersBox from '../components/ConsumersBox.jsx';
import styled, { css } from 'styled-components';

function MetricsContainer() {
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

  // use one hook to update all the states?
  // const [metrics, setMetrics] = useState(
  //   setClusterID('id'),
  //   setBrokers(['brokers']),
  //   setTopics(['topics']),
  //   setConsumerGroup(['consumer group'])
  // );

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
    // // get topics
    // fetch('/admin/topics', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((data) => data.json()) // object with topics array
    //   .then((data) => setTopics(data.topics))
    //   .catch((err) => console.log(err));
    fetchTopics();
    fetchBrokerInfo();
    fetchConsumerGroups();

    // get broker info & cluster ID
    // fetch('/admin/brokerInfo', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((data) => data.json()) // object
    //   .then((data) => setBrokers(data.brokers)) //brokers property, returns  [ { nodeId: 0, host: 'Cerebro', port: 9092 } ]
    //   .then((data) => setClusterID(data.clusterID)) //clusterID property, returns '1_le6xdKSCuBQUa6duOmcg'
    //   .catch((err) => console.log(err));

    // console.log('topics', topics);
    // console.log('cluster', clusterID);
    // console.log('brokers', brokers);
  }, []);
  // trigger setMetrics after fetch request to populate Metrics Components

  const StyledClusterDiv = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    margin: 1em;
    padding: 0.25em 1em;
    border: 5px solid black;
    border-radius: 5px;
  `;

  return (
    <div>
      <StyledClusterDiv>ClusterID: {clusterId}</StyledClusterDiv>
      <BrokerBox clusterId={clusterId} brokers={brokers} />
      <TopicBox topics={topics} />
      <ConsumersBox consumers={consumers} />

      <div id='testingBox'>
        <span>{topics}</span>
        <br />
        <span>{clusterId}</span>
        <br />
        <span>
          {brokers.map((item) => {
            return <pre>{JSON.stringify(item)}</pre>;
          })}
        </span>
        <span>
          {consumers.map((item) => {
            return <pre>{JSON.stringify(item)}</pre>;
          })}
        </span>
      </div>
    </div>
  );
}

export default MetricsContainer;
