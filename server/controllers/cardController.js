const Card = require('../models/Card.js')
const cyrillicToTranslit = require('cyrillic-to-translit-js');

class CardController {
    async createCard(req, res) {
        try {
            const {frontside: frontside, backside: backside, set_id: id } = req.body;
            // const set_id = cyrillicToTranslit().transform(frontside, "_");

            const candidateFrontside = await Card.findOne({frontside: frontside})
            // const candidateBackside = await Card.findOne({backside: backside})
            // const candidateSetId = await Card.findOne({set_id: set_id})
            if (candidateFrontside){
                return res.status(400).json({message: `Set with name ${frontside} already exist`})
            }

            const set = new Card({frontside: frontside, backside: backside, set_id: id});
            await set.save();
            return res.json({message: "Set was created", date: frontside});
        } catch (e) {
            res.send({message: "Server error"});
        }
    }
    async getCard(req, res){
        try {
            const cards = await Card.find({set_id: req.query.id});
            return res.json(cards)
        } catch (e) {
            return res.status(500).json({message:"Server error"});
        }
    }
}

module.exports = new CardController()