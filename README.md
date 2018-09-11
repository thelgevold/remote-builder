This is a POC repo for remote Bazel builds with docker.

The project uses BuildFarm to run a remote build of an Angular application.

Each container installs Ubuntu with the latest version of Bazel

The Angular source code is shared between the host computer and Docker as a volume.

Instructions:
1) Run yarn install in ./angular-demo

2) Terminal1: yarn start-remote-server  

3) Terminal2: yarn start-remote-worker  

4) Terminal3: yarn start-frontend

5) Open the app in a browser from http://localhost:5432
