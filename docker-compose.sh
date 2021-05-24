#!/bin/bash

# if docker is not installed install docker
if ! [[ $(which docker) && $(docker --version) ]]; then
    sudo apt-get update
    sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

    echo \
        "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    sudo apt-get install docker-ce docker-ce-cli containerd.io
fi

if [ "$(docker info | grep Swarm | sed 's/Swarm: //g')" == "inactive" ]; then
    docker swarm init
fi

if ! [ "$(docker volume inspect fbg-postgres-db)" ]; then
    docker volume create fbg-postgres-db
fi 

if ! [ "$(docker network inspect traefik_network)" ]; then 
    docker network create -d overlay -o encrypted=true traefik_network
fi

docker stack deploy -c docker-compose.yml shj_game