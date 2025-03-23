const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3500;
const TASK_FILE = path.join(__dirname,"data",'tasks.json');

app.use(express.json());
app.use("/", logger);

const getTasks = () => {
    if(!fs.existsSync(TASK_FILE)){
        return [];
    }
    const data = fs.readFileSync(TASK_FILE);
    return JSON.parse(data);
};

// For Test Purposes
app.get("/test", (req, res) => {
    res.json({"msg":"Test"});
});

// For Pulling all Tasks
app.get("/tasks", (req, res) => {
    res.send(getTasks())
});

// For Posting Data
// app.post("/task", (req, res)=>{

// });



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));