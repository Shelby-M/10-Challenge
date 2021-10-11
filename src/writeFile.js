const fs = require("fs");

const writeFile = (createFile) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/index.html`, createFile, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      resolve({
        ok: true,
        message: "File Created",
      });
    });
  });
};

module.exports = writeFile;
