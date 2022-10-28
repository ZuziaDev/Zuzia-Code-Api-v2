const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/wallpapers",
  run: async (req, res) => {
    var image = await akaneko.nsfw.mobileWallpapers()
    res.json({
      url: image
    })
  }
}