const mongoose  = require("mongoose");

const newsSchema=mongoose.Schema({
    title:{type : String},
    image:{type : String},
    tags:{type : [String]},
    description:{type : String}
})

const NewsModel = mongoose.model("news", newsSchema);

module.exports={
    NewsModel
}