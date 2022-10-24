const express = require("express");
const { createUser } = require("../controllers/user");
const { loginUser } = require("../controllers/auth")

const router = express.Router();

// In index.js, we told express that the /user route should use this router file
// The below /register route extends that, so the end result will be a URL that looks like http://localhost:4000/user/register
router.post("/register", createUser);
router.post("/login", loginUser)
// router.put("/:id", updateCustomer);

module.exports = router;
