const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

//Create product schema
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// Create product model
const Product = mongoose.model("Products", productsSchema);

// Connect to MongoDB
// mongoose
//   .connect("mongodb://127.0.0.1:27017/learn-mongodb")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => {
//     console.log(err);
//     process.exit(1);
//   });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/learn-mongodb");
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection failed");
    console.log(err);
    process.exit(1);
  }
};

// Enable express json
app.use(express.json());

// Enable express url encoded
app.use(express.urlencoded({ extended: true }));

// Enable all CORS requests
app.use(cors());

app.get("/", (req, res) => {
  res.send("Wellcome to home page");
});

// Create product
app.post("/products", async (req, res) => {
  try {
    // get data from request body
    const { title, price, description, category } = req.body;

    const newProduct = new Product({
      title,
      price,
      description,
      category,
    });
    productData = await newProduct.save();

    res.status(201).send({
      success: true,
      data: productData,
    });
    // create many products at once
    // const productData = await Product.insertMany([
    //   {
    //     title: "Product 1",
    //     price: 100,
    //     description: "This is product 1",
    //     category: "Electronics",
    //   },
    //   {
    //     title: "Product 2",
    //     price: 200,
    //     description: "This is product 2",
    //     category: "Electronics",
    //   },
    //   {
    //     title: "Product 3",
    //     price: 300,
    //     description: "This is product 3",
    //     category: "Electronics",
    //   },
    // ]);

    // res.status(201).send(productData);
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
});

// Get all  products
app.get("/products", async (req, res) => {
  try {
    // const productData = await Product.find();
    // make limit 2 products
    // const productData = await Product.find().limit(2);

    // make specific data by query (comparison operator)
    /* 
    $eq -> equal, 
    $gt -> greater than, 
    $lt -> less than, 
    $gte -> greater than or equal, 
    $lte -> less than or equal, 
    $ne -> not equal, 
    $in -> in an array, 
    $nin -> not in an array
    */
    const productData = await Product.find({ price: { $lt: 300 } });
    if (productData) {
      res.status(200).send({
        success: true,
        data: productData,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

// Get single product
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await Product.findOne({ _id: id });

    // make specific data by id
    // const productData = await Product.findOne({ _id: id }).select({
    //   title: 1,
    //   price: 1,
    // });
    if (productData) {
      res.status(200).send({
        success: true,
        data: productData,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await connectDB();
});

// DATABASE -> COLLECTION -> DOCUMENT

// Get : /products -> return all the Products
// Get : /products/:id -> return specific single product

// Post : /products -> create new product

// Put : /products/:id -> update specific product

// Delete : /products/:id -> delete specific product
