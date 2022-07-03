const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  try {
    //1. Check if email doesnt exist
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "email already exists" });
    }

    //2. check if password === confirm
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ message: "passwords dont match" });
    }
    //3. password > 7
    if (req.body.password.length < 7) {
      return res
        .status(400)
        .json({ message: "password must be at least 7 characters" });
    }
    //4. password encrypt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = hashedPassword;
    await User.create(req.body);

    res.status(200).json({ message: "Created User" });
  } catch (e) {
    res.status(500).json({ message: "Error" });
  }
};

exports.login = async (req, res) => {
  try {
    //1. Check if email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Wrong Email or Password" });
    }
    //2. Check if password is correct
    let checkPassword = await bcrypt.compare(req.body.password, user.password);

    if (checkPassword === false) {
      return res.status(400).json({ message: "Wrong Email or Password" });
    }
    //3. login
    res.status(200).json({ message: "Loged in" });
  } catch (e) {
    res.status(500).json({ message: "Error" });
  }
};

//change password
exports.changePassword = async (req, res) => {
  try {
    //1. Check email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    //2. oldpassword === hashed inside database
    const compare = await bcrypt.compare(req.body.oldPassword, user.password);
    if (compare == false) {
      return res.status(400).json({ message: "Wrong password" });
    }
    //3. newPassword === confirmNewPassword
    if (req.body.newPassword !== req.body.confirmNewPassword) {
      return res.status(400).json({ message: "Passwords does not match" });
    }
    //4. new password length > 7
    if (req.body.newPassword.length < 7) {
      return res
        .status(400)
        .json({ message: "Password must be at least 7 characters" });
    }
    //5. newPassword !== oldpassword
    if (req.body.oldPassword === req.body.newPassword) {
      return res
        .status(400)
        .json({ message: "New password can not be old password" });
    }
    //6. Update database
    const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
    await User.findOneAndUpdate(
      { email: req.body.email },
      { password: hashedPassword }
    );
    res.status(200).json({ message: "password changed" });
  } catch (e) {
    res.status(500).json({ message: "Error" });
  }
};
