const turkceSozluk = require("turkce-sozluk");
module.exports = {
  name: "game/tdk=:feed",
  run: async(req, res) => {
    turkceSozluk(req.params.feed).then(data => {
    console.log(data);
      res.json({ response: data })
});
    
  }
}