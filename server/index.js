const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const setRouter = require("./routes/set.routes");
const cardRouter = require("./routes/card.routes");
const cors = require('cors');
const app = express();
const PORT = config.get("serverPort");
app.use(cors());
app.use(express.json());

app.get('/', async(req,res)=>{
    return res.send('ничего');
})
app.use("/api/set", setRouter);
app.use("/api/card", cardRouter);

const start = async () => {
    try {
        mongoose.connect(config.get("dbUrl"));
        app.listen(PORT, () => {
            console.log("Server starded on port", PORT);
        })
    }
    catch (e) {

    }
}
start();