const routes = require("express").Router();

//--------------------------------usuario------------------------------------------

routes.get("/usuario", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * from usuario", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/usuario", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO usuario set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("El usuario ha sido registrado con éxito");
    });
  });
});

routes.delete("/usuario/:idUsuario", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM usuario WHERE idUsuario = ?",
      [req.params.idUsuario],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("El usuario ha sido eliminado");
      }
    );
  });
});

routes.put("/usuario/:idUsuario", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE usuario set ? WHERE idUsuario = ?",
      [req.body, req.params.idUsuario],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("Los datos del usuario han sido actualizado");
      }
    );
  });
});

module.exports = routes;
