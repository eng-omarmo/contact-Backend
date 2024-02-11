const express = require("express");
const dotenv = require("dotenv").config();
const connectdb = require('./config/dbConnection')
const errorHandler=require('./middleware/errorHandler')

const route = require('./Routers/contactRouters'); // Assuming your router file is named 'contactRouters.js'

connectdb(process.env.URL);

const app = express();

const port = process.env.PORT || 5000; // Correcting port to use PORT instead of Port

app.use(express.json());//body parser for json

app.use(errorHandler);//customized error handler



app.use("/api/contacts", route); // Use the imported router directly

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});
