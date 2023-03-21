const routes = require("express").Router();

//------------------------------routes Producto---------------------------

routes.get("/producto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * from producto", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/producto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO producto set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("El producto ha sido insertado");
    });
  });
});

routes.delete("/producto/:idProducto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM producto WHERE idProducto = ?",
      [req.params.idProducto],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El producto ha sido eliminado");
      }
    );
  });
});

routes.put("/producto/:idProducto", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE producto set ? WHERE idProducto = ?",
      [req.body, req.params.idProducto],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El producto ha sido actualizado");
      }
    );
  });
});

module.exports = routes;
