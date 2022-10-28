const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/hentai",
  run: async(req, res) => {
    var image = await akaneko.nsfw.hentai()
    res.json({
      url: image
    })
  }
}