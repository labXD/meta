# labXD meta website

## Deployment

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
