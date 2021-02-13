const mongoose = require("mongoose");

//Creating a DataBase
mongoose.connect("mongodb://localhost:27017/nodedynamic", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("mongodb connection successfull");
}).catch( (error) => {
    console.log(error);
})
