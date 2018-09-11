module.exports = function(sequelize, DataTypes) {

    var Project = sequelize.define("Project", {

    project_id: {
        type: DataTypes.INTEGER
    },

    project_desc: {
        type: DataTypes.STRING
    },

    expected_time: {
        type: DataTypes.INTEGER
    },
    
    });
  
    Project.associate = function(models) {

        Project.hasMany(models.Session, {
            onDelete: "CASCADE"
      });
        
    };

    return Project;
        

}; 