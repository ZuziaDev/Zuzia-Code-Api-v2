const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/maid",
  run: async(req, res) => {
    var image = await akaneko.nsfw.maid()
    res.json({
      url: image
    })
  }
}