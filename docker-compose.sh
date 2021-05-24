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

if [[ ! $(docker info --format '{{.Swarm.ControlAvailable}}') ]]; then
    echo "initialize docker swarm and rerun script."
    exit 0
fi

if [[ "$(docker volume ls | grep "fbg-postgres-db")" == "" ]] ; then
    docker volume create fbg-postgres-db
fi

if [[ "$(docker volume ls | grep "traefik-certs")" == "" ]] ; then
    docker volume create traefik-certs
fi

if [[ "$(docker network ls | grep "traefik_network")" == "" ]] ; then
    docker network create -d overlay -o encrypted=true traefik_network
fi

export DOMAIN=test2.sahajanand-games.com
export LE_EMAIL=sahajanand-games@gmail.com


if [[ "$1" == "proxy" ]]; then
    docker stack deploy -c docker-proxy.yml shj_game_proxy
fi

docker stack deploy -c docker-stack.yml shj_game_stack