module.exports = {
  name: "nsfw",
  run: async(req, res) => {
      res.json({
      "nsfw": [
      "GET /pussy",
      "GET /ass",
      "GET /bdsm",
      "GET /cum",
      "GET /gifs",
      "GET /hentai",
      "GET /maid",
      "GET /wallpaper",
      "GET /boobs",
      "GET /anal",
      "GET /lewdneko"
      ]
    })
  }
}