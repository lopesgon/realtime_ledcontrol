# realtime_ledcontrol

This project gives access to a led connected to GPIO of a Raspberry Pi in Real-time for all users connected to the server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js and npm package manager have to be installed. Just follow the steps below (they are not from me but I will look for the sources):

Download Node.js source Raspberry Pi Model A, B, B+ and Compute Module:
```
wget https://nodejs.org/dist/v4.0.0/node-v4.0.0-linux-armv6l.tar.gz
tar -xvf node-v4.0.0-linux-armv6l.tar.gz
cd node-v4.0.0-linux-armv6l
```

Raspberry Pi 2 Model B:
```
wget https://nodejs.org/dist/v4.0.0/node-v4.0.0-linux-armv7l.tar.gz
tar -xvf node-v4.0.0-linux-armv7l.tar.gz
cd node-v4.0.0-linux-armv7l
```

Copy to /usr/local:
```
sudo cp -R * /usr/local/
```
That's it! To check Node.js is properly install and you have the right version, run the command ```node -v```

Python 2.7 has to be installed also in order to control the LED has the script is in python. Run the command: ```sudo apt-get install python```

Run the command ```python --version``` to check if your computer is running the 2.7 version.

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

