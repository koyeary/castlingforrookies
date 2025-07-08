# Gambit

Gambit aims to teach how foreign exchange bets and short sells are traded, to demonstrate how to use and understand a foreign exchange market dashboard, and most importantly, give a peek into how (and why) forex trading and geopolitical events influence each other. It is an in-progress browser and Progressive Web Application.

We're only just beginning. This application is continually deployed to show most recent code, and so may often be subject to downtime and errors as development continues.

If the app is up and running, you can take a look at it here: [on my heroku].

If not, see below under Instructions.

### Current To-Do

- Smooth menu transition, resizing, and navbar update when open
- Add forex logic to dashboard components
- Lazy loading animations, messaging toasts, and error boundary page.
- Complete user authentication flow by connecting user database
- Longterm: complete dashboard, create tutorial, show examples of short-seller behavior in context of geopolitcal events and reporting.

## Instructions

Clone the repository from https://github.com/koyeary/castlingforrookies.git.

Open the CastlingForRookies directory and navigate to gambit/.

Then, run npm install.

To run the dashboard (optional):
- Create a .env file in the root folder and add an entry for FOREX_API_KEY from https://forexrateapi.com/
- Navigate to /dashboard. (Auth redirects here with complete user config).

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

