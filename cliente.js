const routes = require("express").Router();

//------------------------------------ routes cliente---------------------------------

routes.get("/cliente", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * from cliente", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/cliente", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO cliente set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("El cliente ha sido insertado");
    });
  });
});

routes.delete("/cliente/:idCliente", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM cliente WHERE idCliente = ?",
      [req.params.idCliente],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El cliente ha sido eliminado");
      }
    );
  });
});

routes.put("/cliente/:idCliente", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE cliente set ? WHERE idCliente = ?",
      [req.body, req.params.idCliente],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El cliente ha sido actualizado");
      }
    );
  });
});

module.exports = routes;
