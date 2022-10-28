const fetch = require("node-fetch")
module.exports = {
  name: "animals/ferret",
  run: async(req, res) => {
    const url = 'https://api-deglas.ml/ferret/';
    const { message } = await fetch(url).then(r => r.json());
    res.json({
      message
    })
  }
}