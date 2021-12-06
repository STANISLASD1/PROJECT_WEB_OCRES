const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://stanislas:Emeraude01@cluster0.vpays.mongodb.net/test",

        {
            useNewUrlParser: true,  
            //useUnifieldTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false,
        }
    ).then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
