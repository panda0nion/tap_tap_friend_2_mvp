# Tap Tap Friend 2 MVP (React + Amplify ready)

This project recreates the Tap Tap Friend v1 Glide UI in React so you can move off Glide and keep the same user experience.

## Run locally

1. Install Node 20 or newer
2. Install dependencies
   npm install
3. Start dev server
   npm run dev

## Invite only gate (MVP)

The app includes a simple invite code gate for the MVP.  
Default invite codes are in `src/mock/invites.ts`.

In production, replace the gate with Cognito invite only sign up.

## Amplify Hosting

Amplify will run:
npm ci
npm run build

Build output folder:
dist

Optional env vars (future AWS wiring):
VITE_GRAPHQL_URL
VITE_COGNITO_USER_POOL_ID
VITE_COGNITO_USER_POOL_CLIENT_ID
