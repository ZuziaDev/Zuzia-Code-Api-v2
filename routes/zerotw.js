const zuzia = require("../main/zerotwo.json")
module.exports = {
  name: "anime/zerotwo",
  run: async(req, res) => {
    let zerotwo = zuzia[Math.floor(Math.random() * zuzia.length)]
    res.json({ url: zerotwo })
  }
}