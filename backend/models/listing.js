import mongoose from "mongoose";
import { Schema } from "mongoose";

const listingSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	property: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
  rating: {
    type: Number, 
    required: true
  }
});

const listingModel = mongoose.model("listing", listingSchema);
export default listingModel;
