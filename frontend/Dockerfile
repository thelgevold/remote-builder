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

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install --no-install-recommends yarn

WORKDIR /usr/angular-bazel-example
RUN yarn install

CMD [ "tail", "-f", "/dev/null" ]