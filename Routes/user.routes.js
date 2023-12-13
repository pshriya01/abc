//Importing all the required modules and function
const express = require("express");
const { HelpModel } = require("../Model/HelpModel");
const { MessageModel } = require("../Model/MessageModel");
const { NewsModel } = require("../Model/NewsModel");

require("dotenv").config();

const userRouter = express.Router();



userRouter.get("/news", async (req, res) => {
  try {
    const news = await NewsModel.find();
    res.status(200).json({ "news": news });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

userRouter.get("/help", async (req, res) => {
  try {
    const help = await HelpModel.find();
    res.status(200).json({ "help": help });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});


userRouter.post("/messages", async (req, res) => {
  const { text } = req.body;

  try {
    // Validate that 'text' is present in the request body
    if (!text) {
      return res.status(400).json({ error: 'Text is required for a message', issue: true });
    }

    // Create a new message using the MessageModel
    const newMessage = await MessageModel.create({ text });

    res.status(201).json({ message: 'Message created successfully', data: newMessage });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Internal Server Error', issue: true });
  }
});


// GET request to fetch all messages
userRouter.get("/messages", async (req, res) => {
  try {
    // Fetch all messages from the MessageModel
    const messages = await MessageModel.find();

    res.status(200).json({ "Message": messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error', issue: true });
  }
});

//exporting the userRouter
module.exports = {
  userRouter,
};
