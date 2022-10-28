const akaneko = require("akaneko")
module.exports = {
  name: "anime/neko",
  run: async(req, res) => {
    var image = await akaneko.neko()
    res.json({
      url: image
    })
  }
}