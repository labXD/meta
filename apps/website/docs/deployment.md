# Deployment

## Pre-requisites

- [Docker](https://www.docker.com/)
- [Google Cloud CLI](https://cloud.google.com/cli)

## Installation

### Google Cloud CLI

> macOS

```bash
brew install google-cloud-sdk --cask
```

> Config

```bash
# log into google cloud
gcloud auth login

# see all gcloud projects
gcloud projects list

# set google cloud project
gcloud config set project <project-id>
```

### Docker

> macOS

```bash
brew install docker --cask
```

> Config

```bash
# sets up docker auth for gcloud
gcloud auth configure-docker
```

## Deploy

Ensure proper google cloud project is set.

```bash
cd apps/website
pnpm run deploy
```

## Abstract from Jimmy

If this is the first time, you need to setup your gcloud

- setup gcloud
  - install from homebrew
  - login to gcloud
- point to the right project
  - `gcloud config set project labxd-neo`
- setup docker for gcloud
  - `gcloud auth configure-docker`

Run script in website directory

`pnpm run deploy`
