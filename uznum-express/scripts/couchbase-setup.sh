#!/bin/bash

export UZNUM_DB_USER=Administrator
export UZNUM_DB_PASSWORD=password
export UZNUM_DB_HOST=localhost:8091
export UZNUM_DB_BUCKET=default
export UZNUM_DB_SCOPE=uznum

curl -X POST -v -u $UZNUM_DB_USER:$UZNUM_DB_PASSWORD \
  "http://$UZNUM_DB_HOST/pools/default/buckets/$UZNUM_DB_BUCKET/scopes" \
  -d name=$UZNUM_DB_SCOPE

curl -X POST -v -u $UZNUM_DB_USER:$UZNUM_DB_PASSWORD \
  "http://$UZNUM_DB_HOST/pools/default/buckets/$UZNUM_DB_BUCKET/scopes/$UZNUM_DB_SCOPE/collections" \
  -d name=users

curl -X POST -v -u $UZNUM_DB_USER:$UZNUM_DB_PASSWORD \
  "http://$UZNUM_DB_HOST/pools/default/buckets/$UZNUM_DB_BUCKET/scopes/$UZNUM_DB_SCOPE/collections" \
  -d name=players

curl -X POST -v -u $UZNUM_DB_USER:$UZNUM_DB_PASSWORD \
  "http://$UZNUM_DB_HOST/pools/default/buckets/$UZNUM_DB_BUCKET/scopes/$UZNUM_DB_SCOPE/collections" \
  -d name=scores

curl -X POST -v -u $UZNUM_DB_USER:$UZNUM_DB_PASSWORD \
  "http://$UZNUM_DB_HOST/pools/default/buckets/$UZNUM_DB_BUCKET/scopes/$UZNUM_DB_SCOPE/collections" \
  -d name=sentences

curl -X POST -v -u $UZNUM_DB_USER:$UZNUM_DB_PASSWORD \
  "http://$UZNUM_DB_HOST/pools/default/buckets/$UZNUM_DB_BUCKET/scopes/$UZNUM_DB_SCOPE/collections" \
  -d name=games

curl -X POST -v -u $UZNUM_DB_USER:$UZNUM_DB_PASSWORD \
  "http://$UZNUM_DB_HOST/pools/default/buckets/$UZNUM_DB_BUCKET/scopes/$UZNUM_DB_SCOPE/collections" \
  -d name=guesses
