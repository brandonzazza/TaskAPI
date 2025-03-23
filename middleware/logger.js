const fs = require("fs");
const path = require("path");

const LOG_PATH = path.join(__dirname, "..", "logs");
const LOG_FILE = path.join(LOG_PATH, "log.txt");

const logger = (req, res, next) => {
    if(!fs.existsSync(LOG_PATH)){
        fs.mkdirSync(LOG_PATH, { recursive: true });
    }
    
    const log_message = `Date: ${new Date().toISOString()} ~~  Method: ${req.method} ~~  Path: ${req.path}\n`;

    fs.appendFile(LOG_FILE, log_message, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
          return;
        }
        console.log('Data appended successfully.');
      });
    next();
}

module.exports = logger;