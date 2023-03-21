const routes = require("express").Router();

//------------------------------proveedor---------------------------

routes.get("/proveedor", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * from proveedor", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/proveedor", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO proveedor set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("El proveedor ha sido registrado con éxito");
    });
  });
});

routes.delete("/proveedor/:IdProveedor", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM proveedor WHERE IdProveedor = ?",
      [req.params.IdProveedor],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El proveedor ha sido eliminado");
      }
    );
  });
});

routes.put("/proveedor/:IdProveedor", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE proveedor set ? WHERE IdProveedor = ?",
      [req.body, req.params.IdProveedor],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("Los datos del proveedor han sido actualizado");
      }
    );
  });
});

module.exports = routes;
