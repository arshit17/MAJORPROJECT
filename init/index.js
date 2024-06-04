const mongoose= require("mongoose");
const initData= require("./data.js");
const Listing= require("../models/listing.js");

let mongoose_url = "mongodb://127.0.0.1:27017/waterlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongoose_url);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:'664cfc1c37e14458882eb123'}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();