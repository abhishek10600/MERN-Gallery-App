const express = require("express");
const { uploadPost, getPosts } = require("../controllers/home.js");
const uploadMiddleware = require("../middlewares/multerMiddleware.js");

const router = express.Router();

router.post("/Home", uploadMiddleware.single("myImage"), uploadPost);
router.get("/Home", getPosts);

module.exports = router;