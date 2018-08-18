FROM ubuntu:16.04

WORKDIR /usr

RUN apt-get update
RUN apt-get -y install openjdk-8-jdk
RUN apt-get -y install curl
RUN apt-get -y install gnupg
RUN apt-get -y install git
RUN apt-get -y install nano
RUN echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee tee /etc/apt/sources.list.d/bazel.list
RUN curl https://bazel.build/bazel-release.pub.gpg | apt-key add -
RUN apt-get update && apt-get -y install bazel
RUN apt-get upgrade -y bazel

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get -y install nodejs

RUN git clone https://github.com/thelgevold/react-bazel-example.git -q

WORKDIR /usr/react-bazel-example

RUN git checkout remote

RUN npm install

ENTRYPOINT [ ]