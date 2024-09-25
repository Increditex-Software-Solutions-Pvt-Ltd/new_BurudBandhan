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
        const {weddingPicture, brideName, groomName, city, description} = req.body;

        try{
            const story = await SuccessStory.findById(req.params.id);
            if(!story){
                return res.status(404).json({message: 'Success Story not found'});
            }

            // update fields if provided
            if(weddingPicture) story.weddingPicture = weddingPicture;
            if(bridename) story.brideName = brideName;
            if(groomName) story.groomName = groomName;
            if(city) story.city = city;
            if(description) story.description = description;

            await story.save();
            res.status(200).json({message:'Success story updated!', successStory:story });

        }catch(err){
            res.status(500).json({ message: err.message });
        }
    },
    async deleteStory(req, res){
        try{
            const story = await SuccessStory.findById(req.params.id);
            if(!story)
                return res.status(404).json({message:"Success Story not found"});

            await SuccessStory.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Success story deleted!"});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}

module.exports = { storyController };