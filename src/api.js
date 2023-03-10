const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message: "Hello World!"
    });
})

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);