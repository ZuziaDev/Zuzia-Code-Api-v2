const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/bdsm",
  run: async(req, res) => {
    var image = await akaneko.nsfw.bdsm()
    res.json({
      url: image
    })
  }
}