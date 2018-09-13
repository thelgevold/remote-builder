FROM ubuntu:latest

WORKDIR /usr

RUN apt-get update
RUN apt-get -y install build-essential openjdk-8-jdk python zip unzip

RUN apt-get -y install curl
RUN apt-get -y install gnupg
RUN apt-get -y install git
RUN apt-get -y install nano

#Temporarily install the latest released version of Bazel (used to build bazel from source)
RUN echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee tee /etc/apt/sources.list.d/bazel.list
RUN curl https://bazel.build/bazel-release.pub.gpg | apt-key add -
RUN apt-get update && apt-get -y install bazel
RUN apt-get upgrade -y bazel

#Build Bazel from source
RUN git clone https://github.com/bazelbuild/bazel.git --v
WORKDIR /usr/bazel

RUN bazel build //src:bazel

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get -y install nodejs

WORKDIR /usr

RUN git clone https://github.com/bazelbuild/bazel-buildfarm.git

WORKDIR /usr/bazel-buildfarm

RUN npm install

WORKDIR /usr/bazel

WORKDIR /usr/bazel-buildfarm

COPY worker.config /usr/bazel-buildfarm/examples/worker.config
COPY server.config /usr/bazel-buildfarm/examples/server.config

#Deploy the built version of Bazel
WORKDIR /usr/bazel
RUN cp bazel-bin/src/bazel /usr/bin/bazel
RUN cp bazel-bin/src/bazel /usr/local/bin

WORKDIR /usr/bazel-buildfarm

ENTRYPOINT [ ]