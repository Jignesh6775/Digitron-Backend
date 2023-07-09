
const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect(process.env.mongoURL)

module.exports={connection}

// API_KEY = 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
// port = 8080
// mongoURL = mongodb+srv://krunalgurao:krunalgurao@digitron.zojf4xp.mongodb.net/Digitron?retryWrites=true&w=majority