import mongoose from "mongoose";

const magicSpellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  cost:{
    type: Number,
    min: 1,
  },
  damage:{
    type: Number,
    min: 0,
    default: 0,
  },
  castingTime:{
    type: Number,
    min: 0,
    default: 6,
  },
  level:{
    type: Number,
    min: 1,
    default: 1,
  },
  range:{
    type: Number,
    min: 0,
    default: 0.1,
  },
  areaOfEffect:{
    type: Boolean,
    default: false,
  },
  school:{
    type: String,
    enum: ['physical', 'arcane', 'fire', 'frost', 'nature', 'shadow', 'holy']
  }
});

const MagicSpell = mongoose.model("MagicSpell", magicSpellSchema);

export default MagicSpell;
