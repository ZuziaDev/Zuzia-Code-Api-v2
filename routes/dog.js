const fetch = require("node-fetch")
module.exports = {
  name: "animals/dog",
  run: async(req, res) => {
    const url = 'https://api-deglas.ml/dogs/';
    const { message } = await fetch(url).then(r => r.json());
    res.json({
      message
    })
  }
}