import * as MagicSpell from "../models/MagicSpell.js"
export const create = async (req, res, next) => {
    try {
        const result = await MagicSpell.create(req.body);
        res.status(201).json(result);
    } catch(err) {
        next(err);
        // res.status(400).json(error.message)
    }
  
};
export const getAll = async (req, res, next) => {
    try {
        const result = await MagicSpell.getAll();
        res.status(200).json(result);
    } catch (err) {
        next(errorSwitch(err));
    };
};

export const getOne = async (req, res, next) => {
    try {
        const result = await MagicSpell.getOne(req.params.magicId);
        res.status(200).json(result);
    } catch(err) {
        next(errorSwitch(err));
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await MagicSpell.replace(req.params.magicId, req.body)
        res.status(201).json(result)
    }catch(err) {
        next(errorSwitch(err));
    };
};
export const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send()
        return
    }
    try {
        const result = await MagicSpell.update(req.params.magicId, req.body);
        res.status(201).json(result);
    }catch(err) {
        next(errorSwitch(err));
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await MagicSpell.deleteOne(req.params.magicId)
        res.status(204).send()
    }catch(err) {
        next(errorSwitch(err));
    };
    console.log(result)
}


