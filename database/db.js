const mongoose = require("mongoose")

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:DKmF8pbvPk9Jz8z@listtowork.t7sgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
         {
            useNewUrlParser:true,
            useUnifiedTopology:true,
         }
                
    ).then(()=>{
        console.log("MongoDB Connected")
    }).catch((err)=>{
        console.log(err)
    });
}

module.exports = connectToDb