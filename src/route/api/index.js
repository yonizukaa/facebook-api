import { Router } from "express";
/** Routes */

import userRoutes from "./route-user";
import profilRoutes from "./route-profil";
import postRoutes from "./route-post";

/** Middlewares */
import jwtRoutes from "./route-authentification";

const api = Router();

api.use("/user", jwtRoutes, userRoutes);
api.use("/profil", profilRoutes);
api.use("/post", jwtRoutes, postRoutes);
api.use("/authentification", jwtRoutes);

export default api;
