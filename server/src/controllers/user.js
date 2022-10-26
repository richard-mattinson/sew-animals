const prisma = require("../utils/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const { createAccessToken, createRefreshToken } = require("./auth");

// POST http://localhost:3000/user/register
const createUser = async (req, res) => {
  const { email, password, userName, profileImage } = req.body;
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
        userName,
        profileImage
      },
    });
    return res.status(201).json({ createdUser });
  } catch (err) {
    res.status(500).json({ error: { msg: "500 - Fail" } });
  }
};

const loginUser = async (req, res) => {
  // POST http://localhost:3000/user/login
  const { email, password } = req.body;

  try {
    const userCheck = await prisma.user.findFirst({
      where: { email: email },
    });

    const passwordCheck = await bcrypt.compare(password, userCheck.password);

    if (!passwordCheck) {
      return res
        .status(409)
        .json({ error: { msg: "409 - Incorrect Username or Password" } });
    }

    const token = createAccessToken(userCheck.id, userCheck.email);
    return res.status(200).json({ data: token, user: userCheck });
  } catch (err) {
    return res.status(500).json({ error: { msg: "500 - Fail" } });
  }
};

const createAccessToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = {
  createUser,
  loginUser,
};
