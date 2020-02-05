var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbCalCount) {
      res.render("coverpage", {
        msg: "Welcome!",
        examples: dbCalCount
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbCalCount
    ) {
      res.render("example", {
        example: dbCalCount
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/diet-recipes/:id", function(req, res) {
    console.log('test');
    res.render("diet-recipes", {
      header: req.params.id,
      query: req.query
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
