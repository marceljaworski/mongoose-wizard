import mongoose from "mongoose";
import MagicSpell from "./MagicSpell.js"

const wizardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  age:{
    type: Number,
    min: 1
  },
  level:{
    type: Number,
    min: 1,
    default: 1,
    
  },
  accuracy:{
    type: Number,
    min: 0,
    max: 1,
    default: 0.3,
  },
  critical:{
    type: Number,
    min: 0,
    max: 1,
    default: 0,
  },
  origin:{
    type: String,
    enum: ['Ankh-Morpork','Bad Schüschein','Betrek','Borogravia','Brindisi','Chimeria','Chirm','Copperhead','Cori Celesti','Djelibeybi','Ephebe','Ghat','Hersheba','Howondaland','Klatchistan','Lipwig','Rehigreed Province','Schmaltzberg','Skund','Sto Helit','Sto Lat','Sunken Leshp','The Chalk','The Wyrmberg','Überwald']
  },
  energy:{
    health:{
      type: Number,
      min: 0,
      default: 1,
    },
    stamina:{
      type: Number,
      min: 0,
      default: 10,
    },
    magic:{
      type: Number,
      min: 0,
      default: 100,
    }, 
  },
  spells:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "MagicSpell",
  }],
});

const Wizard = mongoose.model("Wizard", wizardSchema);
export const create = async (document) => {    
  const newWizard = new Wizard(document);
  const result = await newWizard.save();
  return result;
  
};
export const getAll = async () => {
  const wizards = await Wizard.find()
  // .populate("album");
  return wizards;
};

export const getOne = async (wizardId) => {
  const wizard = await Wizard.findById(wizardId);
  return wizard;
};
export const replace = async (wizardId, data) => {
  const wizard = await Wizard.findOneAndReplace({_id: wizardId}, data, {returnDocument: "after", runValidators: true},);

  return wizard;
};
export const update = async (wizardId, data) => {
  const wizard = await Wizard.findByIdAndUpdate(wizardId, data, {new: true, runValidators: true});

  return wizard;
};
export const deleteOne = async (wizardId) => {
  const wizard = await Wizard.findByIdAndDelete(wizardId)

  return wizard;
};

export default Wizard;
