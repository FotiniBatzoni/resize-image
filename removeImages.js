const fs = require("fs");
const baseDirectory = require("path").resolve("./");

module.exports = function (directory, files = [], selectedId = "") {
    if (directory === "uploads" && files.length > 0) {
        for (let file of files) {
            if (fs.existsSync(`${baseDirectory}/uploads/${file.filename}`)) {
                fs.unlinkSync(`${baseDirectory}/uploads/${file.filename}`);
            }
        }
    }
};
