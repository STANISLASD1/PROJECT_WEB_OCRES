const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://stanislas:Stanislas@cluster0.o9eno.mongodb.net/Project1?retryWrites=true&w=majority",

        {
            //useNewUrlParse :true,  
            //useUnifieldTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false,
        }
    ).then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
