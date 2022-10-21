const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");

// http://localhost:4000/product
const getAllProducts = async (req, res) => {
  try {
    const readProducts = await prisma.product.findMany({
      include: {
        productImages: true,
      },
    });
    return res.status(200).json({ data: readProducts });
  } catch (err) {
    res.status(500).json({ error: { msg: "500 Fail" } });
  }
};
// http://localhost:4000/product/:id
const getProductById = async (req, res) => {
  const id = Number(req.params.id)
  try {
    const readProduct = await prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        productImages: true,
      },
    });
    return res.status(200).json({ data: readProduct });
  } catch (err) {
    res.status(500).json({ error: { msg: "500 Fail" } });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
