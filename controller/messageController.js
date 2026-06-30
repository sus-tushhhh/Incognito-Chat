import express from "express";
import asyncHandler from "express-async-handler";

//@desc Get all messages of a room
//@route GET /api/messages
//@access private
const getMessages = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "Get all messages of a room." });
});

//@desc Send a messages in a room
//@route POST /api/messages
//@access private
const sendMessage = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: req.body.msg, roomid: req.params.roomid });
});

export { getMessages, sendMessage };
