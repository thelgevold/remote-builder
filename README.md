This is a POC repo for remote Bazel builds with docker.

Blog post with some more info: http://www.syntaxsuccess.com/viewarticle/remote-bazel-builds-with-buildfarm

The project uses BuildFarm to run a remote build of an Angular application and a React application.

Each container installs Ubuntu:rbe with the latest version of Bazel.

Instructions:

1) Run yarn install in ./angular-demo and ./react-demo

2) Container1: `yarn start-remote-server`  #Starts a Bazel container with the remote server

3) Container2: `yarn start-remote-worker`  #Starts a Bazel container with the remote worker

This POC contains a large React application as well as a medium sided Angular application.

Build the Angular app by running `yarn start-angular-app`. 

Alternatively you can build the React app by running `yarn start-react-app` 

The React app is served from localhost:9999. The Angular application is served from localhost:3010
