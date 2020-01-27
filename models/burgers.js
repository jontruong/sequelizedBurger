var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;

// module.exports = function(sequelize, DataTypes){
//   var Burger = sequelize.define("Burger", {
//     burger_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     }
//   });
      // return Burger;
// }