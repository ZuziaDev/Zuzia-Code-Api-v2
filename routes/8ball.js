const zuzia = require("../main/8ball.json")
module.exports = {
  name: "game/8ball",
  run: async(req, res) => {
    let ball = zuzia[Math.floor(Math.random() * zuzia.length)]
    res.json({ response: ball })
  }
}