const routes = require("express").Router();

//----------------------------------- routes compra productos------------------------

routes.get("/compraProducto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * from compraproducto", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/compraproducto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO compraproducto set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("La compra fue realizada con exito");
    });
  });
});

routes.delete("/compraproducto/:idCompra", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM compraproducto WHERE idCompra = ?",
      [req.params.idCompra],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El compra ha sido eliminado");
      }
    );
  });
});

routes.put("/compraproducto/:idCompra", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE compraproducto set ? WHERE idCompra = ?",
      [req.body, req.params.idCompra],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El compra ha sido actualizado");
      }
    );
  });
});

module.exports = routes;
