const express = require("express");
const routes = express.Router();

//----------------------------------venta producto---------------------

routes.get("/ventaproducto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * from ventaproducto", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/ventaproducto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO ventaproducto set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("El venta ha sido registrada con éxito");
    });
  });
});

routes.delete("/ventaproducto/:IdVenta", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM ventaproducto WHERE Idventa = ?",
      [req.params.IdVenta],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("La venta ha sido eliminada");
      }
    );
  });
});

routes.put("/ventaproducto/:IdVenta", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE ventaproducto set ? WHERE IdVenta = ?",
      [req.body, req.params.IdVenta],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("Los datos de la venta han sido actualizado");
      }
    );
  });
});

module.exports = routes;
