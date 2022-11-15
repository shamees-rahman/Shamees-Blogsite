const express = require("express");
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 3200
app.listen(PORT);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const blogdb = require('./blogmodel');

app.get('/blog',async(req,res)=>{
    try{
        blogdb.find().then((data)=>{
            res.send(data);
            console.log('data')
        })
    } catch (error){
        console.log(`Error: ${error}`)
    }
})

app.put('/blog',async(req,res)=>{
    try{blogdb.updateOne({"author":"Shamees"},
{$set:{"blogname":"Hi"}})
}catch(error){
    console.log(`Error:${error}`)
}})