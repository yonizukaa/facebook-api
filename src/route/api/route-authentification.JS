import { Router } from "express";
import * as AuthenticationController from "../../controller/controller-authentification";

const api = Router();

api.post("/login", AuthenticationController.login);
api.post("/register", AuthenticationController.register);

export default api;
