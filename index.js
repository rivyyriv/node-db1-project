
const express = require('express');

const server = express();

const accountRoutes = require("./api/accounts/accounts-router.js");

server.use('/api/accounts', accountRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
