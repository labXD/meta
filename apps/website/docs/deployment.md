# Deployment

## Pre-requisites

- [Docker](https://www.docker.com/)
- [Google Cloud CLI](https://cloud.google.com/cli)

## Installation

### Google Cloud CLI

#### macOS

```bash
brew install google-cloud-sdk --cask
```

#### Config

```bash
# log into google cloud
gcloud auth login

# see all gcloud projects
gcloud projects list

# set google cloud project
gcloud config set project <project-id>
```

### Docker

#### macOS

```bash
brew install docker --cask
```

#### Config

```bash
# sets up docker auth for gcloud
gcloud auth configure-docker
```

## Deploy

Ensure proper google cloud project is set.

```bash
cd apps/website
sh srcipts/deploy.sh
```
