module.exports = function(sequelize, DataTypes) {
  var Time = sequelize.define("Time", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    time_started: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{ 
      len: [1]
      }
    },
    time_ended: {
      type: DataTypes.DATE,
      allowNull: false
    },
  task: {
    type: DataTypes.STRING, 
    allowNull: false, 
    validate: {
      len: [1]
    }
  },
 
});

  Time.associate = function(models) {
    //Time belongs to Staff, cant have a time entry without a staff member
    Time.belongsTo(models.Staff, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      },
    });
  };

  return Time;
};
//needs to be renamed as Time.js