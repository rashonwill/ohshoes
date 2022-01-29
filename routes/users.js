const express = require("express");
const usersRouter = express.Router()
//const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const {
  getAllUsers,
  createUser
} = require("../db");

usersRouter.get("/", async (_, res, next) => {
    try {
      const users = await getAllUsers();
      res.send({
        users: users,
      });
    } catch ({ name, message }) {
      next({ name: "GetUserError", message: "Unable to get users" });
      console.error(message)
    }
  });

module.exports = usersRouter;
  