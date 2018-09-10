This is a POC repo for remote Bazel builds with docker.

Instructions:

1) Terminal1: yarn start-remote-server  #Bazel remote server

2) Terminal2  yarn start-remote-worker  #Bazel remote worker

3) Terminal  yarn bazel-shell           #Opens a bash session against the docker container

4) Run yarn serve in terminal 3).

5) Launch the app in a browser from localhost:5432
