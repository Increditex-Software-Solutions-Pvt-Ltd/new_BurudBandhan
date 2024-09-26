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
        const {videoURL, year, description} = req.body;

        try{
            const video = await SuccessVideo.findById(req.params.id);
            if(!video)
                res.status(404).json({message: "video not found!"});
            
            // update feilds if provided
            if(videoURL) video.videoURL = videoURL;
            if(year) video.year = year;
            if(description) video.description = description;

            await video.save();
            res.status(200).json({message: "Success video updated!", successVideo:video});
        } catch(err){
            res.status(500).json({message:err.message});
        }
    },
    async deleteSuccessVideo(req, res){
        try{
            const video = await SuccessVideo.findById(req.params.id);
            if(!video)
                return  res.status(404).json({message:"video not found!"});

            await SuccessVideo.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"Success Video deleted!"});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }

}


module.exports = { successVideoController };