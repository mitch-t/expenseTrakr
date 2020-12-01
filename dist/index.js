const express=require("express"),session=require("express-session"),handlebars=require("express-handlebars"),passport=require("./config/passport");require("dotenv").config();const PORT=process.env.PORT||8080,db=require("./models"),app=express(),bodyParser=require("body-parser");app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!0})),app.use(express.urlencoded({extended:!0})),app.use(express.json()),app.use(express.static("public")),app.use(session({secret:"keyboard cat",resave:!0,saveUninitialized:!0})),app.use(passport.initialize()),app.use(passport.session()),app.engine("handlebars",handlebars({defaultLayout:"main"})),app.set("view engine","handlebars");const htmlRoutes=require("./controllers/routes_controller.js");app.use(htmlRoutes);const userRoutes=require("./controllers/user_controller.js");app.use(userRoutes);const subscriptionRoutes=require("./controllers/subscription_controller.js");app.use(subscriptionRoutes),db.sequelize.sync({}).then(()=>{app.listen(PORT,()=>{console.log("==> \uD83C\uDF0E  Listening on port %s. Visit http://localhost:%s/ in your browser to view.",PORT,PORT)})});
