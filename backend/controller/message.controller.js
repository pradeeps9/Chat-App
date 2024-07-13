import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await conversation.save();
    // await newMessage.save();

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET.IO functionality

    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId) {
      //io.to<socketId>.emit() used to send event to specefic clients
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error occured in sendMessage contoller.", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {$all: [userToChatId, senderId]},
    }).populate("messages"); // NOT A REFERENCE BUT ACTUAL MESSAGES.

    if(!conversation){
      return res.status(200).json([]);
    }

    res.status(201).json(conversation.messages);

  } catch (error) {
    console.log("Error occured in getMessage contoller.", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
