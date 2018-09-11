module.exports = function(sequelize, DataTypes) {


  var Staff = sequelize.define("Staff", {

    staff_id: {
      type: DataTypes.INTEGER
    },

    staff_name: {
      type: DataTypes.STRING
    },

    staff_role: {
      type: DataTypes.STRING
    },

    staff_rate: {
      type: DataTypes.DOUBLE
    },

    total_time: {
      type: DataTypes.INTEGER
    },

    password: {
      type: DataTypes.STRING
    }
  });

  Staff.associate = function(models) {

    Staff.hasMany(models.Session, {
      onDelete: "CASCADE"
    });
  };
  return Staff;
};
