const { app } = require("./app.js");
const dbConnect = require("./databaseConnection.js");

const PORT = process.env.PORT;

dbConnect();

app.listen(4000, () => {
    console.log(`Sever running at http://localhost:${PORT}`);
})