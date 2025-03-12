import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dynamoose from "dynamoose";
// Route IMPORTS

// CONFIGURAYIONS
dotenv.config();

const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";
// If using DynamoDB Local, configure endpoint
if (isProduction) {
  dynamoose.aws.ddb.local();
}

// Middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

// server
if (!isProduction) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
