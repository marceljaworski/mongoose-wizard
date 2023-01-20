import * as Wizard from "../models/Wizard.js"
export const create = async (req, res, next) => {
    try {
        const result = await Wizard.create(req.body);
        res.status(201).json(result);
    } catch(err) {
        next(err);
        // res.status(400).json(error.message)
    }
  
};
export const getAll = async (req, res, next) => {
    try {
        const result = await Wizard.getAll();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    };
};

export const getOne = async (req, res, next) => {
    try {
        const result = await Wizard.getOne(req.params.wizardId);
        res.status(200).json(result);
    } catch(err) {
        next(err);
    };
}
export const replace = async (req, res, next) => {
    try {
        const result = await Wizard.replace(req.params.wizardId, req.body)
        res.status(201).json(result)
    }catch(err) {
        next(err);
    };
};
export const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(204).send()
        return
    }
    try {
        const result = await Wizard.update(req.params.wizardId, req.body);
        res.status(201).json(result);
    }catch(err) {
        next(err);
    }; 
};
export const deleteOne = async (req, res, next) => {
    try{
        await Wizard.deleteOne(req.params.wizardId)
        res.status(204).send()
    }catch(err) {
        next(err);
    };
    console.log(result)
}


