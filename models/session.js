module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define("Session", {
    //possibly redundant
    time_worked: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    project_id: { 
      type: DataTypes.INTEGER
    },
    //also possibly redundant as there is an auto-created ("dateCreated") timestamp
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    //same as above object
    
    //task - type of work the user is doing - could have different rates. 
  task_completion_desc: {
    type: DataTypes.STRING, 
    allowNull: false
  }
 
});

  Session.associate = function(models) {

    Session.belongsTo(models.Staff, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      },
    });
    Session.belongsTo(models.Project, {
      onDelete: "CASCADE",
      foreignKey: { 
        allowNull: false
      },
    });
  };

  return Session;
};
