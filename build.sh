#!/bin/bash

# Variables
IMAGE_NAME="nirajana23/devops"
TAG="latest"

# Build Docker image
docker build -t $IMAGE_NAME:$TAG .
echo "Docker image $IMAGE_NAME:$TAG built successfully."
