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

export const create = async (document) => {    
  const newSpell = new MagicSpell(document);
  const result = await newSpell.save();
  return result;
  
};
export const getAll = async () => {
  const spells = await MagicSpell.find()
  // .populate("album");
  return spells;
};

export const getOne = async (magicId) => {
  const spell = await MagicSpell.findById(magicId);
  return spell;
};
export const replace = async (magicId, data) => {
  const spell = await MagicSpell.findOneAndReplace({_id: magicId}, data, {returnDocument: "after", runValidators: true},);

  return spell;
};
export const update = async (magicId, data) => {
  const spell = await MagicSpell.findByIdAndUpdate(magicId, data, {new: true, runValidators: true});

  return spell;
};
export const deleteOne = async (magicId) => {
  const spell = await MagicSpell.findByIdAndDelete(magicId)

  return spell;
};

export default MagicSpell;
