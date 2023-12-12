# Description

This project consists of a service that handles HTTP calls and produces kafka events, and a service that consumes those events. This was a quick way to learn how kafka works in practice.

## Run it locally

Ensure kafka is running locally on port `9092`, then run both apps (`yarn start:dev`). You should then be able to send a `POST` to `localhost:3000` with the body containing the `userId` and `price` fields.
