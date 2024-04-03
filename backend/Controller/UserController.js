const UserModel = require("../Model/UserModel");
async function createNewUser(req, res) {
  const { name, email, age, mobile, work, address, desc } = req.body;
  // console.log(name);
  if (!name || !email || !age || !mobile || !work || !address || !desc) {
    res.status(404).json({ msg: "pl.fill the data" });
  }
  try {
    const preuser = await UserModel.findOne({ email: email });
    if (preuser) {
      res.status(500).json({ msg: "email already exits" });
    }

    let user = await UserModel.create({
      name: name,
      email: email,
      age: age,
      mobile: mobile,
      work: work,
      address: address,
      desc: desc,
    });
    // console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(401).json({ error: error });
  }
}

async function getAllData(req, res) {
  let user = await UserModel.find();

  try {
    if (!user) return res.status(400).json({ msg: "something went wrong" });
    else return res.status(200).json(user);
  } catch (err) {
    res.status(409).json(err);
  }
}

async function getUserbyid(req, res) {
  const id = req.params.id;
  // console.log(id);
  try {
    let User = await UserModel.findById({ _id: id });
    // console.log(User);
    res.status(200).json(User);
  } catch (err) {
    res.status(409).json(err);
  }
}
async function updateUserbyid(req, res) {
  try {
    const { id } = req.params;
    // console.log(id);
    let user = await UserModel.findByIdAndUpdate(id, req.body); //{new:true}
    if (!user) {
      return res.status(400).json({ msg: "cannot find any student id" });
    }
    const updateUser = await UserModel.findById(id);
    return res.status(200).json(updateUser);
  } catch (err) {
    res.status(409).json(err);
  }
}
async function deleteUserByid(req, res) {
  try {
    // const id = req.params.Id
    const { id } = req.params;
    // console.log(id);
    let user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  createNewUser,
  getAllData,
  getUserbyid,
  updateUserbyid,
  deleteUserByid,
};
