import { Router } from "express";
import * as controllerProfil from "../../controller/controller-profil";

const api = Router();

api.post("/", controllerProfil.createOne);
api.get("/", controllerProfil.findAll);
api.get("/:id", controllerProfil.findOneById);
api.delete("/:id", controllerProfil.deleteOne);
api.put("/:id", controllerProfil.updateOne);

export default api;
