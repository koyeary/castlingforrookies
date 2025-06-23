# Gambit

Gambit is an in-progress browser and Progressive Web Application that aims to demonstrate how to use and understand a foreign exchange market dashboard, teach how foreign exchange bets and short sells are traded, and give a peek into why and how currency trading is connected to geopolitical events.

We're only just beginning. This application is continually deployed to show most recent code, and so may be subject to downtime and errors as development continues.

If the app is up and running, you can take a look at it here: [on my heroku].

If not, see below under Instructions.

### Current To-Do

- smooth menu transition, resizing, and navbar update when open
- add forex logic to dashboard components
- lazy loading animations, messaging toasts, and error boundary page.
- complete user authentication flow by connecting user database

## Instructions

Clone the repository from https://github.com/koyeary/castlingforrookies.git.

To run the dashboard:
Create a .env file in the root folder and add an entry for FOREX_API_KEY from https://forexrateapi.com/
Navigate to /dashboard. (Auth redirects here with complete user config).

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

