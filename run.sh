#!/bin/sh
#install and run app

npm install
npm -g install bower
bower install
PORT=8000 node app
