const Set = require('../models/Set')
const cyrillicToTranslit = require('cyrillic-to-translit-js');

class SetController {
    async createSet(req, res) {
        try {
            console.log(req.body);
            const {name, discription } = req.body;

            const alias = cyrillicToTranslit().transform(name, "_");
            const candidateName = await Set.findOne({name: name})
            const candidateAlias = await Set.findOne({alias: alias})
            if (candidateName || candidateAlias){
                return res.status(400).json({message: `Set with name ${name} already exist`})
            }

            const set = new Set({name, discription, alias});
            await set.save();
            return res.json({message: "Set was created", date: name});
        } catch (e) {
            res.send({message: "Server error"});
        }
    }
    async getSet(req, res){
        try {
            const sets = await Set.find();
            return res.json(sets)
        } catch (e) {
            return res.status(500).json({message:"Server error"});
        }
    }
    async deleteSet (req, res){
        try {
            const sets = await Set.find();
            if(sets){
                await Set.deleteOne({_id: req.query.id})
                
            } else {
                return res.status(400).json({message: "set not found"})
            }
            return res.json(sets, {message:"Set has been removed"})
        } catch(e) {
            return res.status(500).json({message:"Delete error"})
        }
    }
    async updateSet (req, res) {
        try{
            const {id, name, discription } = req.body;
            const sets = await Set.find({_id: id});
            if (!sets){
                return res.status(400).json({message: "set not found"})
            }
            const alias = cyrillicToTranslit().transform(name, "_");
            const candidateAlias = await Set.findOne({alias: alias})
            const candidateName = await Set.findOne({name: name})
            if (candidateName || candidateAlias){
                return res.status(400).json({message: `set with name ${name} already exist`})
            }
            
            await Set.findByIdAndUpdate (id, 
                {name: name, discription: discription, alias: alias},
                {new: true})
                
            return res.json({message:"set was update"})
        } catch(e) {
            return res.status(500).json({message:"Update error"})
        }
    }
}

module.exports = new SetController()