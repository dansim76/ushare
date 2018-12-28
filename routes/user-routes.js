const path = require ("path");

//needs new path
const authController = require("../controllers/auth_controller.js")

module.exports = function(app, passport){
    app.get("/", authcontroller.ushare);
    app.get("/main", authController.main);
    app.get("/signup", authController.signup);
    app.get("/signin",authController.signin);

}

function isLoggedin(req,res,next){
    if(req.isAuthenticated())
        return next();
     res.redirect("/signin")   
}