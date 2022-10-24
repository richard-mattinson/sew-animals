const prisma = require("../utils/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const { createAccessToken, createRefreshToken } = require("./auth");

// POST http://localhost:3000/user/register
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
        .json({ error: { msg: "400 - Email address already registered" } });
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

const loginUser = async (req, res) => {
  // POST http://www.localhost:4000/user/login
  const { username, password } = req.body;

  const foundUser = await prisma.user.findUnique({
    where: { username: username },
  });
  if (!foundUser) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  const passwordsMatch = await bcrypt.compare(password, foundUser.password);
  if (!passwordsMatch) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  const token = createAccessToken(userCheck.id, userCheck.email);
  console.log("Server Login Token", token);

  res.status(201).json({ token });
  const createAccessToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
  };
};

module.exports = {
  createUser,
  loginUser,
};
