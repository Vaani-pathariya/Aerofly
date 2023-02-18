const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');

const app = express();
const port = 3001;

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