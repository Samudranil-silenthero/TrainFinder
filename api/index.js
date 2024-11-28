const express= require('express');
const app=express();
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cookieParser=require('cookie-parser')
const Routes= require("./routes/route.js")
const cors=require('cors');

dotenv.config();
app.use(express.json());
app.use(cookieParser());
// app.use(cors({origin:"http://localhost:3000/"}));
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useFindAndModify:true
})
.then(console.log("Connected to mongodb"))
.catch("Error in connection");

app.use("/api",Routes);

app.listen(process.env.PORT,()=>{
    console.log("server runs at port 5000");
});