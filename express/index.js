// npm install jest --save-dev -> to store dependency as a dev dependency -  will not be installed in prod server

import express from "express";
import dotenv from "dotenv";
import { userRouter, productRouter } from "./routes/index.js";
import morgan from "morgan";

dotenv.config();

const app = express();

// third party middleware
app.use(morgan("short"));
// GET /error 500 51 - 6.209 ms
// Part	Meaning
// GET	HTTP method
// /	Requested route
// 500	HTTP status code (Internal Server Error)
// 6.209 ms	Response time (in milliseconds)
// 51	Response content length (in bytes)

// Use In-Built Middlwares
app.use(express.json());

// Use of above middleware:
/*
Purpose and Functionality:
Parses JSON Payloads:
When a client sends data in JSON format (e.g., in the body of a POST or PUT request), express.json() automatically parses this raw JSON string into a JavaScript object.
Populates req.body:
The parsed JSON data is then made available in the req.body property of the request object. This allows developers to easily access and manipulate the data within their route handlers.
Content-Type Check:
The middleware specifically looks for requests where the Content-Type header matches application/json. If the content type is not application/json, or if the JSON is malformed, it will not parse the data and may result in an empty req.body or an error.
Error Handling:
In case of malformed JSON, express.json() can return a 400 Bad Request error.
*/

// app level middleware
app.use((req, res, next) => {
  console.log("App level middlware used", req.url); // print the triggered method
  next(); // comment to see the effect
});

// define routes
app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.post("/register", (req, res) => {
  console.log("Request body received", req.body.user_address);
  res.status(201).send("User Registered");
});

// query parameter
app.put("/username", (req, res) => {
  res.send(`UserName updated with userID: ${req.query.userID}`);
});

// path parameter
app.delete("/user/:userID", (req, res) => {
  res.send(`User deleted with userID: ${req.params.userID}`);
});

// creating routers to separate out the routes - users and products

app.use("/api", userRouter);
app.use("/api", productRouter);

app.get("/error", (req, res, next) => {
  next("network connection error"); // Pass the error to the error-handling middleware
});

// a fallback so that application should not break and we give a better UX
app.all("/*any", (req, res) => {
  res.send(
    `This route matches all paths and all HTTP methods. Requested path: ${req.path}`
  );
});

// Error-handling middleware (MUST come after all routes)
app.use((err, req, res, next) => {
  console.error(err); // Log the error
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// const PORT = process.env.APP_PORT ?? 3000;
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});