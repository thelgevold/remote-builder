This is a POC repo for remote Bazel builds with docker.

The project uses BuildFarm to run a remote build of an Angular application.

Each container installs Ubuntu with a version of Bazel built from master.

The Angular source code is shared between the host computer and Docker container as a volume.

Instructions:

1) Run yarn install in ./angular-demo

2) Container1: `yarn start-remote-server`  #Bazel container hosting remote server

3) Container2: `yarn start-remote-worker`  #Bazel container hosting remote worker

4) Container3: `yarn start-angular`        #Bazel container for doing builds

Next you can open a Bazel terminal session against the container from 4) by running `yarn bazel-terminal1` 

From there you can run any bazel command you would like. Example `ibazel run //src:devserver`

The site can be served from localhost:3001

Please Note: The first build of the containers will take a long time (Get a coffee while you wait...)

The containers do the following steps:
- Install Ubuntu
- Build Bazel from source (master)
- Build Buildfarm server + worker from source (master)

Building directly from master is not recommended in a production setup.