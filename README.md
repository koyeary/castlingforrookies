# Gambit

Gambit is an in-progress browser and Progressive Web Application that aims to demonstrate how to use and understand a foreign exchange market dashboard, teach how foreign exchange bets and short sells are traded, and give a peek into why and how currency trading is connected to geopolitical trends.

We're only just beginning. This application is continually deployed to show most recent code, and so may be subject to downtime and errors as development continues.

If the app is up and running, you can take a look at it here: [on my heroku].

If not, see below under Instructions.

### Current To-Do

- Lazy loading animations, messaging toasts, and error boundary page.
- complete user authentication flow by connecting user database
- reconnect user dashboard components to completed forex logic

## Instructions

Clone the repository from https://github.com/koyeary/castlingforrookies.git.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
