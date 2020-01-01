const express = require('express');
const next = require('next');
const { parse } = require('url');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// use port=3001 node server.js
const PORT = process.env.PORT || 3000;


app.prepare().then(() => {
  const server = express();
  server.use((req, res) => {
    const { pathname, query } = parse(req.url, true);
    handle(req, res, pathname, query);
  });

  server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
  });
});

