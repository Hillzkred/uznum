# Uznum Backend

## How to run

1. Install dependencies

```bash
yarn install
```

2. Run the server

```bash
yarn start
```

## Cloud Infrastructure

### Backend Server

Deploy using GCP Cloud Build

### Storage

Use GCP Cloud Storage and Deployment Manager. Run this command to update the bucket.

```shell
gcloud config set project uznum-373722
gcloud auth application-default login 
gcloud deployment-manager deployments update uznum-audio-files --config ./cloud/audio-bucket.yml
```

### Run couchbase locally

```shell
docker run -d --name db -p 8091-8097:8091-8097 -p 9123:9123 -p 11207:11207 -p 11210:11210 -p 11280:11280 -p 18091-18097:18091-18097 couchbase
```

## Database Model

### Entities

- Admin
    - username (unique)
    - password
- Player
    - name (unique)
    - scores
- Sentence
    - text
    - audio_href
- Game
    - sentence_id (FK)
    - guesses
