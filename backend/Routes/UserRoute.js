const express = require("express");

const {
  createNewUser,
  getAllData,
  getUserbyid,
  updateUserbyid,
  deleteUserByid,
} = require("../Controller/UserController");
const router = express.Router();

router.route("/register").post(createNewUser);

router.route("/getdata").get(getAllData);

router.route("/getuserbyid/:id").get(getUserbyid);

router.route("/updateuser/:id").patch(updateUserbyid);

router.route("/deleteuser/:id").delete(deleteUserByid);

module.exports = router;
