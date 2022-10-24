const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { createAccessToken, createRefreshToken } = require("./auth");

// create a new POST request in Insomnia with the route http://localhost:3000/user/register to test this works
const createUser = async (req, res) => {
  const { email, password } = req.body;
  const saltRounds = 10;
  try {
    const emailAlreadyRegistered = await prisma.user.findFirst({
      where: { email: email },
    });
    if (emailAlreadyRegistered) {
      return res
        .status(400)
        .json({ error: { msg: "409 - Email address already registered" } });
    }
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const createdUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
      },
    });
    return res.status(201).json({ createdUser });
  } catch (err) {
    res.status(500).json({ error: { msg: "500 - Fail" } });
  }
};

module.exports = {
  createUser,
};
