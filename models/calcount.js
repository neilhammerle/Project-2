module.exports = function (sequelize, DataTypes) {
  var CalCount = sequelize.define("CalCount", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return CalCount;
};
