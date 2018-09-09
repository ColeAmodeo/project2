module.exports = function(sequelize, DataTypes) {
    var Staff = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
        staff_name: DataTypes.STRING
    },
    {
        staff_role: DataTypes.STRING
    },
    {
        staff_rate: DataTypes.DOUBLE(2,2)
    },
    
);
  
    Author.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Author.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Staff;
  };
  