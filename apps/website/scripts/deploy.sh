#!/bin/bash

gcloudProject=$(gcloud config get-value project)

docker build -t labxd --platform linux/amd64 -f ./Dockerfile ../../ --tag "gcr.io/$gcloudProject/labxd"
docker push "gcr.io/$gcloudProject/labxd:latest"
gcloud run deploy labxd --image "gcr.io/$gcloudProject/labxd:latest" --region us-east1 --platform managed --memory 1Gi
