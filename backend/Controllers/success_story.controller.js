require('dotenv').config();
const { SuccessStory } = require('../Models/success_story.model');


const storyController = {
    async getAllStories(req, res){
        try{
            const stories = await SuccessStory.find();
            res.status(200).json(stories);
        }catch(err){
            res.status(500).json({message:err.message});
        }

    },
    async addStory(req, res){
        const {weddingPicture, brideName, groomName, city, description} = req.body;
        try{
            const newStory = new SuccessStory({
                weddingPicture, brideName, groomName, city, description
            });

            await newStory.save();
            res.status(201).json({
                message: 'Success story added!',
                successStory: newStory
            })

        } catch(err){
            res.status(500).json({message:err.message});
        }
    },
    async editStory(req, res){

    },
    async deleteStory(req, res){

    }
}

module.exports = { storyController };