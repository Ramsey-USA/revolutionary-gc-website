const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");

// Basic health check function
exports.helloWorld = onRequest({region: "us-central1"}, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
