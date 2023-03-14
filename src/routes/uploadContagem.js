const express = require("express");
const InputEstoqueController = require("../../controllers/InputEstoqueController.js");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post(
  "/upload",
  upload.single("arquivo"),
  InputEstoqueController.UploadContagem
);
router.get("/listarcontagem", InputEstoqueController.ListarTodosRegistros);

module.exports = router;
