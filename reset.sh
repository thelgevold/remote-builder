#!/bin/bash
docker-compose -f ./docker-compose-worker.yml down
docker-compose -f ./docker-compose-server.yml down
docker-compose -f frontend/docker-compose-app.yml down
