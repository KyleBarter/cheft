const express = require('express')
const router = express.Router()

const recipeCtrl = require("../../controllers/api/recipes")

//? GET routes
router.get("/", recipeCtrl.index);
router.get("/:id/edit", recipeCtrl.edit);
router.get("/:id", recipeCtrl.show)

//? POST routes
router.post("/", recipeCtrl.create);


//? PUT routes
router.put("/:id", recipeCtrl.update);

//? DELETE routes
router.delete("/:id", recipeCtrl.deleteRecipe)


module.exports = router