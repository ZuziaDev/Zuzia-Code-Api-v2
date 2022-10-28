const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/pussy",
  run: async(req, res) => {
    var image = await akaneko.nsfw.pussy()
    res.json({
      url: image
    })
  }
}