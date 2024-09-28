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
    },
    async deleteMember(req, res){
        // delete member
    }
}


module.exports = memberController;