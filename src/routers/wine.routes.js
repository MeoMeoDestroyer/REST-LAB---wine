import express from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = express.Router();

// GET all wines
router.get("/wines", wineController.getAllWines);

// GET wine by id
router.get("/wines/:id", wineController.getWineById);

// POST
router.post("/wines", wineController.createWine);

//PUT 
router.put("/wines/:id", wineController.updateWine);
//DELETE
router.delete("/wines/:id", wineController.deleteWine);

export default router;