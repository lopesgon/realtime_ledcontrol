# realtime_ledcontrol

This project gives access to a led connected to GPIO of a Raspberry Pi in Real-time for all users connected to the server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js and npm package manager have to be installed.

```
sudo apt-get install nodejs
```

Python 2.7 has to be installed also in order to control the LED has the script is in python.

```
sudo apt-get install python
```

### Installing

First of all, Node.js has to be installed with npm package manager in order to do the next steps.

Once you have copied the repository in your local machine, use the commands:

```
npm install
```

Once npm has finished the process, go to the ./bin folder and execute:

```
node www
```

Access from any device connected to the local network via http://ipAddress:3000 and have fun. (The project also works through internet)

## Deployment

TODO

## Built With

* [Socket.io](https://github.com/socketio/socket.io) - Real-time engine

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Frederic Lopes** - *Initial work* - [PurpleBooth](https://github.com/lopesgon)

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

