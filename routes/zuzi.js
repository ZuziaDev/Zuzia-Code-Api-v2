const zuzia = require("../main/words.json")
module.exports = {
  name: "zuzi/word",
  run: async(req, res) => {
    let word = zuzia[Math.floor(Math.random() * zuzia.length)]
    res.json({ response: word })
  }
}