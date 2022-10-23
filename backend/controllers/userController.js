const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const cloudinary = require('cloudinary');


// Register a User
exports.registerUser = async (req, res, next) => {
  //Problem

  // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
  //   folder: 'avatars',
  //   width: 150,
  //   crop: 'scale',
  // });

  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    // avatar: {
    //   public_id: myCloud.public_id,
    //   url: myCloud.secure_url,
    // },
  });
  // res.send(req.body);
  // console.log(user);
  //   sendToken(user, 201, res);

  res.status(200).json({
    success: true,
    user,
  });
};

