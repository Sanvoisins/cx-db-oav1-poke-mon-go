import mongoose, { Schema } from 'mongoose'

export default mongoose.model(
  'Pokemon',
  new Schema({
    number: Number,
    name: String,
    types: Array,
    species: String,
    evolution: Array,
    weaknesses: Array,
    image: String,
    height: String,
    weight: String,
    spawn_chance: String
  })
)
