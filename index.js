const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3030;
const morgan = require("morgan");
const cors = require("cors");

// Middlewae
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// DB Connections
mongoose.connect("mongodb+srv://mofj:windows@cluster0-cjc2l.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {


    if(!err)
    {
        console.log("DB Connected Successfully");
    }
})


// Router
const infoRouter = require('./router');
app.use("/info", infoRouter)




app.listen(port, () => {
    console.log(`Listeninng on port ${port}`)
})