const express = require("express");
const { 
    getAllProducts,
    getProductsBySearch,
    getProductById } 
    = require("../controllers/product");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/?category", getProductsBySearch)
router.get("/:id", getProductById)

module.exports = router;
