const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
const userModel=require("./models/signup");
const app = express();
const port = 5000;
const spawner=require('child_process').spawn;
var predict
app.use(cors());
mongoose.connect('mongodb+srv://vaani:vaani@cluster0.t8e1ct1.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/",async(req,res)=>{
    const {first,last,email,Language,password}=await req.body
    const user= new userModel({
        _id:new mongoose.Types.ObjectId,
        first:first,
        last:last,
        email:email,
        Language:Language,
        password:password
    })
    user.save().then(use => {
        console.log(`${use} has registered successfully`)
    }).catch(err => {console.log(`unable to register`, err)})
    .then((response)=>console.log(response))
})
app.post("/predict",async(req,res)=>{
    const {string}=await req.body
    const data_to_pass=string;
    const python_process=spawner('python',['./test.py',data_to_pass])
    python_process.stdout.on('data',(data)=>{
    predict=data.toString()
    console.log(predict)
});
})
app.get("/predict",async(req,res)=>{
    res.send(predict)
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))