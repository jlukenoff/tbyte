const express = require("express");
const path = require("path");

const { env: { PORT = "3000" } = {} } = process;
const STATIC_DIR = path.resolve("public");

const app = express();

app.use(express.static(STATIC_DIR));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { app };
