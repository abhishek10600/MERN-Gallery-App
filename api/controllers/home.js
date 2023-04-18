const Photo = require("../models/Pictures.js");

const uploadPost = async (req, res) => {
    const photo = req.file.filename;
    const uploadData = await Photo.create({
        photo
    })
    res.status(200).json({
        success: true,
        message: "Post uploaded successfully",
        data: uploadData
    })
}

const getPosts = async (req, res) => {
    const allPosts = await Photo.find().sort({ createdAt: "descending" });
    res.status(200).json({
        success: true,
        message: "Successfully fetched",
        data: allPosts
    });

}

module.exports = { uploadPost, getPosts };