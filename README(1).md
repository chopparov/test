# Starter Full-Stack Project

A minimal project to learn by editing real, working code.

## What's inside

- `public/index.html` — semantic HTML page (header/nav/main/section/footer, a form)
- `public/styles.css` — box model, Flexbox, CSS Grid, and a responsive media query, all commented
- `public/script.js` — frontend JS that sends the contact form to the backend with `fetch()`
- `server.js` — an Express backend with a GET route and a POST route, storing data in `messages.json`

## How to run it

1. Install [Node.js](https://nodejs.org) if you don't have it (includes `npm`).
2. Open a terminal in this folder and run:
   ```
   npm install
   npm start
   ```
3. Open your browser to **http://localhost:3000**
4. Fill out the contact form and submit it — watch your terminal, it will log the message.
5. Visit **http://localhost:3000/api/messages** to see the raw JSON your backend stored.

## Suggested learning order

1. Open `index.html` and `styles.css` side by side. Change a color, a spacing value,
   or the grid's `minmax(260px, 1fr)` and refresh the page to see what happens.
2. Read `script.js` — this is the bridge between frontend and backend.
3. Read `server.js` top to bottom. Try adding a new route, e.g. a `GET /api/hello`
   that returns `{ message: "hello" }`, and load it in your browser.
4. Break something on purpose (delete a `}`, misspell a route) and read the error —
   learning to read errors is half of backend development.

## Next steps once this feels comfortable

- Swap the JSON file for a real database (SQLite is the easiest next step)
- Add simple authentication (a login form + sessions)
- Deploy: frontend on Netlify/Vercel, backend on Render or Railway
