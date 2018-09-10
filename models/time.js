module.exports = function(sequelize, DataTypes) {
  var Time = sequelize.define("Time", {
    //possibly redundant
    time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //also possibly redundant as there is an auto-created ("dateCreated") timestamp
    time_started: {
      type: DataTypes.DATE,
      allowNull: false
    },
    //same as above object
    time_ended: {
      type: DataTypes.DATE,
      allowNull: false
    },
    //task - type of work the user is doing - could have different rates. 
  task: {
    type: DataTypes.STRING, 
    allowNull: false, 
  },
 
});

  Time.associate = function(models) {

    Time.belongsTo(models.Staff, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      },
    });
  };

  return Time;
};
