const akaneko = require("akaneko")
module.exports = {
  name: "nsfw/neko",
  run: async(req, res) => {
    var image = await akaneko.lewdNeko()
    res.json({
      url: image
    })
  }
}