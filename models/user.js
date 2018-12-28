
module.exports = (sequelize,DataTypes)=>{
    var User = sequelize.define("User",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        password:{
            tye:DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true,
                len: [1,100]
            }
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
                len: [1,50]
            }
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true,
                len:[1,50]
            }
        },
        email: {
            type: DataTypes.String,
            allowNull:false,
            validate:{
                notEMpty:true,
                len:[1,50]
            }
        }
    });

    User.associate = function(models){
        User.hasMany(models.collection,{
            onDelete:"cascade"
        })
    }




    return User;
};