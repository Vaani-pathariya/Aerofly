const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');

const app = express();
const port = 5000;
const spawner=require('child_process').spawn;
const data_to_pass=["hello","i vaani"]
const python_process=spawner('python',['./test.py',JSON.stringify(data_to_pass)])
python_process.stdout.on('data',(data)=>{
    console.log('data received',data.toString());
});
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

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))