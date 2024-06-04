const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        require: true,
    },
    description: String,
    image:{
        url: String,
        fileName: String,
    },
    price: Number,
    location: String,
    country:{
        type:String,
        require:true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Reviews.deleteMany({_id : {$in:listing.reviews} })
    }
})

const listing = mongoose.model("listing",listingSchema);
module.exports = listing;
