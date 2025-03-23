const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use("/", logger);

app.get("/", (req, res) => {
    res.json({"msg":"Test"});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));