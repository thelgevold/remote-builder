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

RUN cp bazel-bin/src/bazel /usr/bin/bazel
RUN cp bazel-bin/src/bazel /usr/local/bin

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get -y install nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install --no-install-recommends yarn

RUN yarn global add @bazel/ibazel

WORKDIR /usr/demo

ENTRYPOINT [ ]