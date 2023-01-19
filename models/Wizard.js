import mongoose from "mongoose";
import { MagicSpell } from "./MagicSpell.js"

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
    type: mongoose.schema.Types.ObjectId,
    ref: MagicSpell,
  }],
});

const Wizard = mongoose.model("Wizard", wizardSchema);

export default Wizard;
