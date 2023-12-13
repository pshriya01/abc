const mongoose  = require("mongoose");

const messageSchema=mongoose.Schema({
    text:{type : [String]},
    
})

const MessageModel = mongoose.model("message", messageSchema);

module.exports={
    MessageModel
}