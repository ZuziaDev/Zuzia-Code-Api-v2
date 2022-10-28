const fs = require("fs")

module.exports = function (app){
  fs.readdirSync(__dirname).forEach(function(file){
    if (file === "index.js") return;
    let name = file.substr(0, file.indexOf("."));
    let timestamp = Math.floor(Date.now()/1000)
    const route = require(`./${name}`);
    app.get(`/${route.name}`, async (req, res) => {
      console.log(req.url, timestamp);
      route.run(req, res);
    });
  })
};