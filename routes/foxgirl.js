const akaneko = require("akaneko")
module.exports = {
  name: "anime/foxgirl",
  run: async(req, res) => {
    var image = await akaneko.foxgirl()
    res.json({
      url: image
    })
  }
}