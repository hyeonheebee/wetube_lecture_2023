import express from "express";
import {
  getEdit,
  postEdit,
  getChangePassword,
  postChangePassword,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";
import {
  uploadAvatarMiddleware,
  protectorMiddleware,
  publicOnlyMiddleware,
} from "../middlewares";
const userRouter = express.Router();
userRouter.get("/logout", protectorMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(uploadAvatarMiddleware.single("Avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);

userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
