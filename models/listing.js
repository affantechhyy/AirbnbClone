const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: {
      type: String,
      required: true
    },
    filename: String,
  },
  price: Number,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref:"User",
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point'], // Corrected enum value
      required: true
    },
  location:{
    type:String
  },
    coordinates: {
      type: [Number],
      required: true
    },
  },
});

// Ensure an index on the 'location' field for geospatial queries
listingSchema.index({ location: "2dsphere" });

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;