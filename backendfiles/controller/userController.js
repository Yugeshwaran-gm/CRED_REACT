import users from '../model/usermodel.js'

export const crea=async (req,res)=>{
    try{
        let userdata=new users(req.body);
        const {email}=userdata;
        const userexist=await user.findone({email});
        if(userexist){
            return res.status(400).json({message:"user exist"});
        }
        const saveduser=await userdata.save();
        res.status(200).json({saveduser})
    }
    catch(err){
        res.status(500).json({error:"internal server error" });
    }
}


export const fetch=async (req,res)=>{
    try{
        res.send("hello world");
    } catch (err) {
        res.status(500).json({error:"internal server error" });
    }
}