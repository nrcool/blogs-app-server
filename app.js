const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
//create express server
const app = express();
const cors = require("cors");
const indexRoute = require("./routes/indexRoute");
const usersRoute = require("./routes/usersRoute");
const blogsRoute = require("./routes/blogsRoute");
const commentsRoute = require("./routes/commentsRoute");
const {GridFsStorage} = require("multer-gridfs-storage");
const cookieParser = require("cookie-parser");
const authentication = require("./middlewares/auth");
const multer = require("multer");
const fs = require("fs");
const path =require("path")
//express middleware to parsing json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors middleware
app.use(cors({ origin: "https://blogs-app-server-ee6hmjzw3-nrcool.vercel.app/", exposedHeaders: ["token"] }));
app.use(cookieParser());

const storage = new GridFsStorage({
  url: `${process.env.MONGO_URI}/${process.env.DB_NAME}`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
      const match = ["image/png", "image/jpeg"];

      if (match.indexOf(file.mimetype) === -1) {
          const filename = `${Date.now()}-blogapp-${file.originalname}`;
          return filename;
      }

      return {
          bucketName: process.env.DB_BUCKET,
          filename: `${Date.now()}-blogapp-${file.originalname}`,
      };
  },
});
const upload = multer({ storage });
//set Port
const PORT = process.env.PORT || 4000;

let ImageBucket;
//create mongoose connection
mongoose.connect(process.env.MONGO_URI,{dbName: process.env.DB_NAME}, () => {
  console.log("connection established ....... with mongo");
  ImageBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: process.env.DB_BUCKET,
  });
});

//image checker middleware
function imageStore(req, res, next) {
  console.log(req.url);
  if (req.file) {
    req.body.image=`https://blogs-app-server-ee6hmjzw3-nrcool.vercel.app/images/${req.file.filename}`
    next();
  } else {
    next();
  }
}

//server static files
/* app.use(express.static(__dirname+"/build"))  */
//index route
app.use("/", indexRoute);
//users route
app.use("/users", upload.single("image"),imageStore, usersRoute);

//records route
app.use("/blogs",upload.single("image"),imageStore, blogsRoute);

//orders route
app.use("/comments", commentsRoute);

app.get("/verifytoken", authentication, (req, res, next) => {
  const user = req.user;
  console.log(req.user);
  res.send({ success: true, data: user });
});
app.get("/images/:filename",(req,res,next)=>{
    ImageBucket.openDownloadStreamByName(req.params.filename).pipe(res)
})

//handling 404 page not
app.use((req, res, next) => {
  res.sendFile(__dirname + "/views/notfound.html");
});

//error handler middleware// universal error handler
app.use((err, request, res, next) => {
  res.status(err.status || 500).send({ success: false, message: err.message });
});

//listening for any request coming on port 4000
app.listen(PORT, () => console.log(`server is running on : ${PORT}`));

//middleware function
/* app.use((req,res,next)=>{
    if(req.method==="GET" || req.method==="POST"){
         next() 
    }else{
        res.send("we support only get and post requests")
    }
}) */

//MVC architecture design pattern
// M stands for MODEL (database)
// V stands for VIEW (frontend)
// C stands for CONTROLLER (functionality)
/* The Model contains only the pure application data, it contains no logic describing how to present the data to a user.
The View presents the model’s data to the user. The view knows how to access the model’s data, but it does not know what this data means or what the user can do to manipulate it.
The Controller exists between the view and the model. It listens to events triggered by the view (or another external source) and executes the appropriate reaction to these events. In most cases, the reaction is to call a method on the model. Since the view and the model are connected through a notification mechanism, the result of this action is then automatically reflected in the view. */
