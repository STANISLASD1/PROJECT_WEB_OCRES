const UserModel= require('../model/user.model');

module.exports.signUp= async(req, res)=>
{
    console.log(req.body);
    const{pseudo, email, password}= req.body
    try{
        const user = await UserModel.create({pseudo, email, password});
        res.status(404).json({user:user._id});
    }catch(err){
        res.status(404).send({err})
    }

}