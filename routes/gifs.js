const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/gifs",
  run: async(req, res) => {
    var image = await akaneko.nsfw.gifs()
    res.json({
      url: image
    })
  }
}