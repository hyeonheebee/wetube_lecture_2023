import express from "express";
import {
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
  watch,
} from "../controllers/videoController";
import { uploadVideoMiddleware, protectorMiddleware } from "../middlewares";
// import { edit } from "../controllerss/videoController";
const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(uploadVideoMiddleware.single("video"), postUpload);
export default videoRouter;
