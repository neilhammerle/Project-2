var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/CalCount", function(req, res) {
    db.CalCount.findAll({}).then(function(dbCalCount) {
      res.json(dbCalCount);
    });
  });

  // Create a new example
  app.post("/api/CalCount", function(req, res) {
    db.CalCount.create(req.body).then(function(dbCalCount) {
      res.json(dbCalCount);
    });
  });

  // Delete an example by id
  app.delete("/api/CalCount/:id", function(req, res) {
    db.CalCount.destroy({ where: { id: req.params.id } }).then(function(
      dbCalCount
    ) {
      res.json(dbCalCount);
    });
  });
};
