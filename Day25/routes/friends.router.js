const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("Ip AddressS", req.ip);
  next();
});
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend); // GET /friends/22

module.exports = friendsRouter;
