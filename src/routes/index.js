const express = require("express");
const cors = require("cors");
const contagem = require("./uploadContagem.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ Titulo: "Carlos Roberto" });
  });

  app.use(
    express.json(),
    cors(),
    contagem,

    express.raw({ type: "application/pdf" })
  );
};

module.exports = routes;
