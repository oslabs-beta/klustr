
<p align="center">
  <a href="http://kluster.app/">
 <img src="./client/LogoDots.svg" width="400" height="320"></p>
<h1 align="center"><strong>klustr</strong></h1></a>


<p align="center">An open source monitoring tool for Apache Kafka</p>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"/>
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
  <img alt="license" src="https://img.shields.io/github/license/oslabs-beta/klustr?color=%2357d3af">
  <img alt="last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/klustr?color=%2357d3af">
  <img alt="Repo stars" src="https://img.shields.io/github/stars/oslabs-beta/klustr?logoColor=%2334495e&style=social"> 
</p>

## Table of Contents

* [Features](#Features)
* [Demo](#klustr-in-action)
* [Installation](#installation)
* [Engineering Team](#klustr-Engineering-Team)
* [License](#License)

## Features
* ### User-friendly GUI
* ### Insights into cluster brokers, topics, and partitions
* ### Controller and partition health monitoring
* ### Real-time graphical displays of user-selected metrics 


## Klustr in Action
<hr/>
<br>
<p align="center">Enter the Broker and Exporter ports where your Kafka instance is running </p>
<p align="center">
<img src="https://klustr.app/images/Broker-Entry.gif" alt="Enter Ports">
</p>
<br>
<p align="center">Upon successful submission, critical information about your brokers, topics, and consumer groups becomes immediately available </p>
<p align="center">
  <img src="https://klustr.app/images/Cluster-Overview-SM.gif" alt="Cluster Overview">
</p> 
<br>
<p align="center">From the Core Metrics dashboard, you will see controller and partition data and can select critical metrics...</p>
<p align="center">
  <img src="https://klustr.app/images/Core-Metrics-SM.gif" alt="Cluster Overview">
</p> 
<p align="center">...to be displayed and updated, in real time!</p>
<p align="center">
  <img src="https://klustr.app/images/Graph-SM.gif">
</p>

## Installation
- Klustr requires configuration with JMX Exporter to capture advanced metrics. If you do not have a port configured with JMX Exporter, go to https://github.com/Khyunwoo1/JMXScripter and follow the directions in that repo.
- Clone this repo ````https://github.com/oslabs-beta/klustr.git````
- Run the following commands in the root folder
````npm install````
````npm run build````
````npm run start````
- Navigate to http://localhost:3000/ 
- Enter the port address for one of your Kafka brokers, and the JMX Exporter port address to see your cluster information and metrics 



## Klustr Engineering Team
[Shah Chaudri](https://github.com/shahprose)
| [Paul Kim](https://github.com/Khyunwoo1)
| [Eric Tacher](https://github.com/BreakerBeam)
| [Cris Newsome](https://github.com/angelEQ)
| [Katrina Villanueva](https://github.com/klgvillanueva)

We welcome contributions, so please feel free to fork, clone, and help klustr grow! Remember to leave a [![GitHub stars](https://img.shields.io/github/stars/oslabs-beta/klustr?style=social&label=Star&)](https://github.com/oslabs-beta/klustr/stargazers) if you'd like to support our work!

## License
Released under the MIT License
