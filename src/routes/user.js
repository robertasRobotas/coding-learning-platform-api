import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  SIGN_IN,
  LOG_IN,
  VALIDATE_USER,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ADMIN,
} from "../controllers/user.js";

const router = express.Router();

router.post("/users", SIGN_IN);
router.get("/users/validate", auth, VALIDATE_USER);
router.post("/users/login", LOG_IN);
router.put("/password", UPDATE_PASSWORD);
router.put("/password/admin", UPDATE_PASSWORD_ADMIN);

export default router;
