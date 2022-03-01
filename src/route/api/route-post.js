import { Router } from "express";
import * as controllerPost from "../../controller/controller-post";

const api = Router();

api.post("/", controllerPost.createOne);
api.get("/", controllerPost.findAll);
api.get("/:id", controllerPost.findOneById);
api.delete("/:id", controllerPost.deleteOne);
api.put("/:id", controllerPost.updateOne);

export default api;
