module.export = ( squelize, DataTypes)=>{
    var Collection= sequelize.define("collection",{
        username:{
            type: DataTypes.TEXT
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
        companyName:{
            type:DataTypes.STRING
        },
        title:{
            type:DataTypes.String
        },
        addressNumber: {
            type: DataTypes.STRING,
            notEmpty: false
        },

        addressStreet: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        city: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        state: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        zip: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        email: {
            type: DataTypes.String,
            allowNull:false,
            validate:{
                notEMpty:true,
                len:[1,50]
            }
        },
        cellNum :{
            type: DataTypes.INTEGER,
            

        }

    })
    Collection.associate = function(models){
        Collection.belongsTo(models.user,{
            foreignKey:{
                allowNull:false
            }
        })
    
    }






    return collection
}