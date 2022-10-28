const fetch = require("node-fetch")
module.exports = {
  name: "animals/panda",
  run: async(req, res) => {
    const url = 'https://api-deglas.ml/panda/';
    const { message } = await fetch(url).then(r => r.json());
    res.json({
      message
    })
  }
}