const { SuccessVideo } = require("../Models/success_video.model");


const successVideoController = {
    async addSuccessVideo(req, res){
        const {videoURL, year, description} = req.body;
        try{
            const newVideo = new SuccessVideo({
                videoURL,
                year,
                description,
                user:req.user.id
            });

            await newVideo.save();
            res.status(201).json({
                message: "Added new success video!",
                successVideo: newVideo
            })
        }catch(err){
            res.status(500).json({message:err.message});
        }
    },
    async getAllSuccessVideos(req, res){
        try{
            const successVideos = await SuccessVideo.find();
            res.status(200).json(successVideos);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    },
    async getSingleSuccessVideo(req, res){
        try{
            const video = await SuccessVideo.findById(req.params.id);
            if(!video){
                res.status(404).json({message:"Video not found!"});
            }

            res.status(200).json({video});

        }catch(err){
            res.status(500).json({message:err.message});
        }
    },
    async updateSuccessVideo(req, res){

    },
    async deleteSuccessVideo(req, res){

    }

}


module.exports = { successVideoController };