import user from "../model/usermodel.js";

export const create = async (req, res) => {
    try {
        let userdata = new user(req.body);
        const { email } = userdata;
        const userExist = await user.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const saveduser = await userdata.save();
        res.status(201).json({ saveduser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const fetch = async (req, res) => {
    try {
        const users = await user.find();
        if(users.length === 0) {
            return res.status(404).json({message: "No user found"});
        }
        res.status(200).json({users});
    }
    catch(err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const update = async (req, res) => {
    try {
        const email = req.params.email;
        const userExist = await user.findOne({ email: email });
        if (!userExist) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await user.findOneAndUpdate(
            { email: email },
            req.body,
            { new: true }
        );
        res.status(200).json({ updatedUser });
    } catch (err) {
        console.error("Error during update:", err); // Log the error
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteuser = async (req, res) => {
    try {
        const email = req.params.email;
        const userExist = await user.findOne({email: email});
        if (!userExist) {
            return res.status(404).json({message: "User not found"});
        }
        await user.findOneAndDelete(email);
        res.status(200).json({message: "User deleted successfully"});
    }
    catch(err) {
        res.status(500).json({error: "Internal Server Error"});
    }
};
export const findById = async (req, res) => {
    try {
        const email = req.params.email;
        const userExist = await user.findOne({_id: id});
        if (!userExist) {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({userExist});
    }
    catch(err) {
        res.status(500).json({error: "Internal Server Error"});
    }
};
