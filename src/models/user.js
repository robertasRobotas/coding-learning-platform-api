import mongoose from "mongoose";

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  occupation: { type: String, required: true },
  isPremium: { type: Boolean, required: true },
  creationDate: { type: Date, required: true },
  lastLoginDate: { type: Date, required: true },
  country: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  certificateURLs: { type: Array, required: false },
});

export default mongoose.model("User", userSchema);
