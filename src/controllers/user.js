import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";
import { requiredUserFields } from "../utils/user.js";

export const VALIDATE_USER = async (req, res) => {
  res.status(200).json({ message: "user OK" });
};

export const SIGN_IN = async (req, res) => {
  try {
    const missingFields = requiredUserFields.filter(
      (field) => !req.body[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Missing required fields",
        missingFields: missingFields,
      });
    }

    const salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const user = new UserModel({
      id: uuidv4(),
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: hash,
      dateOfBirth: req.body.dateOfBirth,
      occupation: req.body.occupation,
      isPremium: false,
      creationDate: new Date(),
      lastLoginDate: new Date(),
      country: req.body.country,
      phoneNumber: req.body.phoneNumber,
      certificateURLs: null,
    });

    const response = await user.save();

    const jwt_token = jwt.sign(
      { email: user.email, user_id: user.id },
      process.env.JWT_SECRET
    );

    return res.status(200).json({ user: response, jwt_token: jwt_token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "bad data", err: err });
  }
};

export const LOG_IN = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: "bad data" });
    }

    const isPasswordMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "bad data" });
    }

    const jwt_token = jwt.sign(
      { email: user.email, user_id: user.id },
      process.env.JWT_SECRET
    );

    const userDetails = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      certificateURLs: user.certificateURLs,
      isPremium: user.isPremium,
    };

    return res.status(200).json({ jwt_token: jwt_token, user: userDetails });
  } catch (err) {
    console.log(err);
  }
};
