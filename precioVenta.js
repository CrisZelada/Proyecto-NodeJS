const routes = require("express").Router();

//-------------------------------lista precio venta----------------------

routes.get("/precioventa", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * from listaprecioventa", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/precioventa", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "INSERT INTO listaprecioventa set ?",
      [req.body],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("Precio actual");
      }
    );
  });
});

routes.delete("/precioventa/:IdLisPre", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM listaprecioventa WHERE IdLisPre = ?",
      [req.params.IdLisPre],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El precio ha sido eliminado");
      }
    );
  });
});

routes.put("/precioventa/:IdLisPre", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE listaprecioventa set ? WHERE IdLisPre = ?",
      [req.body, req.params.IdLisPre],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El precio ha sido actualizado");
      }
    );
  });
});

module.exports = routes;
