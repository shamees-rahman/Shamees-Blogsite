const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://Shamees:privacytermsmongodb@cluster0.vbrm5tw.mongodb.net/Blogsite?retryWrites=true&w=majority').then(()=>{
    console.log("mongodb connected");
})
.catch(error=>{
    console.log(`connection`+ error);
});

const blogmodel = new Schema ({
    blogname: String,
    author: String,
    followers: Number,
    posts:[
        {
            title: String,
            date: String,
            body: String,
            likes: Number,
            comments:[]
        }
    ]
});

const blogdb = mongoose.model('blog', blogmodel);
module.exports = blogdb;  