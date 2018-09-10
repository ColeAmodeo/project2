module.exports = function(sequelize, DataTypes) {
    // Giving the Author model a name of type STRING
    var Staff = sequelize.define("Staff", 
    {
        staff_id: DataTypes.INTEGER,
    },
    {
        staff_name: DataTypes.STRING
    },
    {
        staff_role: DataTypes.STRING
    },
    {
        staff_rate: DataTypes.DOUBLE
    });
  
    Staff.associate = function(models) {

      Staff.hasMany(models.Time, {
        onDelete: "CASCADE"
      });
    };
  
    return Staff;
  };
  