const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");

// create a new GET request in Insomnia with the route http://localhost:4000/product to test this works
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

module.exports = {
  getAllProducts,
};
