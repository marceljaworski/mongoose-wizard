import { Router } from "express";
import * as wizard from "../controllers/wizard.js";


const wizardRoutes = Router();


wizardRoutes.post("/", wizard.create);
wizardRoutes.get("/all", wizard.getAll);
wizardRoutes.get("/:magicId", wizard.getOne);
wizardRoutes.put("/:magicId", wizard.replace);
wizardRoutes.patch("/:magicId", wizard.update);
wizardRoutes.delete("/:magicId", wizard.deleteOne);


export default wizardRoutes;
