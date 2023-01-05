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

## Database Model

### Entities

- Admin
  - username (unique)
  - password
- Player
  - name (unique)
- Scores
  - player (FK)
  - score
- Sentence
  - text
  - audio_href
- Game
  - sentence_id (FK)
- Guess
  - game_id (FK)
  - player_id (FK)
  - guess
