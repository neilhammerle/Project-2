var db = require("../models");
var axios = require("axios");

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

  app.get("/api/recipes/:recipe", function(req, res) {
    console.log("dope");
    let userSearch = req.params.recipe;
    let APPID = "ea609d64";
    let APIKEY = "308c7451b81f8d1eaa36b355b451f12d";
    let recipieURL =
      "https://api.edamam.com/search?q=" +
      userSearch +
      "&app_id=" +
      APPID +
      "&app_key=" +
      APIKEY +
      "";
    console.log(recipieURL);

    axios
      .get(recipieURL)
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function(response) {
        // always executed
        console.log("hello");
        res.json(response);
      });
  });
};
