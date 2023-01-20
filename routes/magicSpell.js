import { Router } from "express";
import * as magicSpell from "../controllers/magicSpell.js";


const magicSpellRoutes = Router();


magicSpellRoutes.post("/", magicSpell.create);
magicSpellRoutes.get("/all", magicSpell.getAll);
magicSpellRoutes.get("/:magicId", magicSpell.getOne);
magicSpellRoutes.put("/:magicId", magicSpell.replace);
magicSpellRoutes.patch("/:magicId", magicSpell.update);
magicSpellRoutes.delete("/:magicId", magicSpell.deleteOne);


export default magicSpellRoutes;
