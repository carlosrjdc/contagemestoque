const db = require("../models");
const excelToJson = require("convert-excel-to-json");
require("dotenv").config();

const estoque = db.Estoque;

class InputEstoqueController {
  static UploadContagem = async (req, res) => {
    const result = excelToJson({
      source: req.file.buffer,
      columnToKey: {
        A: "endereco",
        B: "sku",
        C: "skuantigo",
        D: "descricao",
        E: "lote",
        F: "unidads",
        G: "datafab",
        H: "dataval",
        I: "status",
      },
      sheets: "base",
    });

    result.base.shift();

    try {
      const cadastroEmMassa = await estoque.bulkCreate(result.base);
      res.status(200).json(cadastroEmMassa);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
  static ListarTodosRegistros = async (req, res) => {
    try {
      const dados = await estoque.findAll();
      res.status(200).json(dados);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  };
}

module.exports = InputEstoqueController;
