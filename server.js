import express from 'express';
import fileSystem from './fileSystem.js';
const app = express()
const router = express.Router();


router.get('/', (req, res)=>{
    res.send("This is Blessing's Journal API");
})

router.post('/', (req, res) => {
    let comment = req.query.comment; 
    let index = req.query.index;
    fileSystem.writeFile(comment, index);  
})

app.use(router);

app.listen(5000, ()=>{
    console.log("My API is listening on port 5000");
})