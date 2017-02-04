'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define('Ingredients', {
    name: {
      type:DataTypes.STRING,
      required:true,
      validate:{
        isAlpha:true
      }
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    unit:{
      type:DataTypes.STRING,
      required:true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Ingredients.belongsTo(models.Recipes)
      }
    }
  });
  return Ingredients;
};