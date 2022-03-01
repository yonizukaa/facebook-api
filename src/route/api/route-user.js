import { Router } from "express";
import * as ControllerUser from "../../controller/controller-user";
import * as profileController from "../../controller/controller-profil";
import * as postController from "../../controller/controller-post";

const api = Router();

api.get("/:id/post", postController.findOneById);
api.patch("/:id/profile", profileController.updateOne);
api.get("/:id/profil", profileController.findOneById);
api.get("/:id", ControllerUser.findOneById);
api.delete("/:id", ControllerUser.deleteOne);
api.put("/:id", ControllerUser.updateOne);

export default api;
