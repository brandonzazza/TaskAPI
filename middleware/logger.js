const fs = require("fs");
const path = require("path");

const LOG_PATH = path.join("..", "/logs");
const LOG_FILE = path.join(LOG_PATH, "log.txt");

const logger = (req, res, next) => {
    if(!fs.existsSync(LOG_PATH)){
        fs.mkdirSync(LOG_PATH, { recursive: true });
    }
    fs.appendFile(LOG_FILE, "Test", (err) => {
        if (err) {
          console.error('Error appending to file:', err);
          return;
        }
        console.log('Data appended successfully.');
      });
    next();
}

module.exports = logger;