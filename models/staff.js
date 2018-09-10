module.exports = function(sequelize, DataTypes) {
    // Giving the Author model a name of type STRING
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
    });
  
    Staff.associate = function(models) {

      Staff.hasMany(models.Time, {
        onDelete: "CASCADE"
      });
    };
  
    return Staff;
  };
  