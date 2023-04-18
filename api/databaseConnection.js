const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "GalleryApp"
    }).then(() => { console.log("Database connected succseffully") }).catch((e) => console.log(e));
}

module.exports = dbConnect;