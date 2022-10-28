const fbr = require("fs-random")
module.exports = {
  name: "nsfw/boobs",
  run: async(req, res) => {
    var image = await fbr.boobs()
    res.json({
      url: image
    })
  }
}