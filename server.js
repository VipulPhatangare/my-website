
require('dotenv').config();
const express = require("express");  // express
const app = express();
const mongoose = require('mongoose');
const path = require("path"); 

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname, 'public'))); // assets path

const port = process.env.PORT;


mongoose_call_func()
    .then(()=>{
        console.log('Mongoose connection successful..');
    })
    .catch((err) =>{console.log(err)})

async function mongoose_call_func() {
    await mongoose.connect(process.env.MONGO_URI);
}


app.get('/',(req, res)=>{
    res.render('home');
});

app.listen(port,()=>{
    console.log('Listing to port : ', port);
})