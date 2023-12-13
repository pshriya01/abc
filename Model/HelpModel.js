const mongoose  = require("mongoose");

const helpSchema=mongoose.Schema({
    id:{type: Number},
    title:{type : String},
    subtitle:{type : String},
    articles:{type : Number}
})

const HelpModel = mongoose.model("help", helpSchema);

module.exports={
    HelpModel
}