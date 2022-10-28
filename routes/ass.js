const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/ass",
  run: async(req, res) => {
    var image = await akaneko.nsfw.ass()
    res.json({
      url: image
    })
  }
}