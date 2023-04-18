const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema(
    {
        photo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const photosModel = mongoose.model("Photos", photosSchema);

module.exports = photosModel;