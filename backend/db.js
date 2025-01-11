const mongoose=require('mongoose')
const mongoURI = "mongodb://localhost:27017/EcomDatabase";
async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=>{console.log("connected Successfully")}).catch((err)=>{console.log(err)})
}
module.exports=connectToMongo;
