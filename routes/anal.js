const fbr = require("fs-random")
module.exports = {
  name: "nsfw/anal",
  run: async(req, res) => {
    var image = await fbr.anal()
    res.json({
      url: image
    })
  }
}