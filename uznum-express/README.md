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
