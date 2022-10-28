const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/cum",
  run: async(req, res) => {
    var image = await akaneko.nsfw.cum()
    res.json({
      url: image
    })
  }
}