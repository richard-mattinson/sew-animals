const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
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

// const createRefreshToken = (id, email) => {
//   return jwt.sign({ id, email }, process.env.JWT_REFRESH_SECRET, {
//     expiresIn: process.env.JWT_REFRESH_EXPIRY,
//   });
// };

module.exports = {
  loginUser,
  createAccessToken,
  // createRefreshToken,
};
