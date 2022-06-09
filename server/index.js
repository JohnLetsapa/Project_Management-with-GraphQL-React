const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");

const connectDB = require("./config/db");
const schema = require("./schema/schema");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    // process.env.NODE_ENV === "development"
  })
);

const start = () => {
  const conn = connectDB(process.env.MONGO_URI);
  if (conn) {
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
  }
};

start();
