const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  matiere: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  collectionName: {
    type: String,
    required: true,
  },
  pictures: {
    type: Array,
    required: true,
  },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

/*

	product: {
		_id: String,
		title: String,
		reference: String,
		price: Number,
		description: String (markdown),
		matiere: String,
    collectionName: String,
		pictures: [
			[link, color],
			...
		] 
	}

*/
