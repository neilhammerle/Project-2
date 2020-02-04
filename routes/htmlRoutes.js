var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbCalCount) {
      res.render("coverpage", {
        msg: "Welcome!",
        examples: dbCalCount
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/CalCount/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbCalCount
    ) {
      res.render("CalCount", {
        example: dbCalCount
      });
    });
  });

  // Loads sign up page in the server
  app.get("/signup", function (req, res) {
    res.render("signUp");
  });

  // Loads login page in the server
  app.get("/login", function (req, res) {
    res.render("login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
