import User from "../models/user.model.js";

export const getUserFromSidebar = async (req, res) => {
  try {

    const loggedInUser = req.user._id;

    const filterdUsers = await User.find({_id : {$ne : loggedInUser}}).select("-password");

    res.status(200).json(filterdUsers);
    
  } catch (error) {
    console.error("Error occured in user Controller.", error.message);
    res.status(500).json({error: "Internal Server Error."});
  }
}