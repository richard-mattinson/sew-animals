const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { createAccessToken, createRefreshToken } = require("./auth");

// create a new POST request in Insomnia with the route http://localhost:3000/user/register to test this works
const createUser = async (req, res) => {
  const { email } = req.body;
  const createdUser = await prisma.user.create({
    data: {
      email,
    },
  });
  try {
    return res.status(201).json({ createdUser });
  } catch (error) {
    res.status(500).json({ error: { msg: "500 Fail" } });
  }
};

module.exports = {
  createUser,
};
