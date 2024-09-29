const Member = require('../Models/member.model');


const memberController = {
    async addMember(req, res){
        // add new member
        const {memberImage, fullName, position} = req.body;

        try{
            const newMember = new Member({memberImage, fullName, position});
            await newMember.save();
            res.status(201).json({
                message: "New Member Added successfully!",
                member:newMember
            });

        }catch(err){
            res.status(500).json({message: err.message});
        }
    },
    async getAllMembers(req, res){
        // get all members
        try{
            const members = await Member.find();
            res.status(200).json(members);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    },
    async updateMember(req, res){
        // update required details about the members
        const {memberImage, fullName, position} = req.body;

        try{
            const member = await Member.findById(req.params.id);
            if(!member)
                res.status(404).json({message: "Member not found!"});

            if(memberImage) member.memberImage = memberImage;
            if(fullName) member.fullName = fullName;
            if(position) member.position = position;

            await member.save();
            res.status(200).json({message: "Member updated successfully!"});

        }catch(err){
            res.status(500).json({message: err.message});
        }

    },
    async deleteMember(req, res){
        // delete member
        try{
            const member = await Member.findById(req.params.id);
            if(!member)
                res.status(404).json({message: "Member not found!"});
        
            await Member.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Member deleted successfully!"});

        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}


module.exports = memberController;