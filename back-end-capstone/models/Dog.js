import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  temperament: {
    type: [String],
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  weight: {
    type: String,
    required: true,
  },

  height: {
    type: String,
    required: true,
  },

  lifeExpectancy: {
    type: String,
    required: true,
  },

  feeding: {
    type: String,
    required: true,
  },

  care: {
    type: String,
    required: true,
  },

  origin: {
    type: String,
    required: true,
  },
});

const Dog = mongoose.model("Dog", dogSchema);

export default Dog;