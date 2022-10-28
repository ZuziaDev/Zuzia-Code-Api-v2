const tcmbdoviz = require('tcmb-doviz');
module.exports = {
  name: "doviz/dolar",
  run: async(req, res) => {
    var usd = await tcmbdoviz.getExchangeRate('USD')
    res.send(
      usd
    )
  }
}