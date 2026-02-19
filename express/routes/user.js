import express from "express";
const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log("Request received for user routes");
  next();
});

userRouter.get("/user", (req, res) => {
  console.log("User fetched");
  res.status(200).send("User data fetched");
});

userRouter.post("/user", (req, res) => {
  console.log("User created");
  res.status(201).send("User created");
});

export default userRouter;
