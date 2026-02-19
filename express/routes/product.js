import express from "express";
const productRouter = express.Router();

productRouter.use((req, res, next) => {
  console.log(`Product route hit received at ${new Date()}`);
  next();
});

productRouter.get("/product", (req, res) => {
  console.log("Product fetched");
  res.status(200).send("Product data fetched");
});

productRouter.post("/product", (req, res) => {
  console.log("Product created");
  res.status(201).send("Product created");
});

export default productRouter;
