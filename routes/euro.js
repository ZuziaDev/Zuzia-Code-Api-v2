const tcmbdoviz = require('tcmb-doviz');
module.exports = {
  name: "doviz/euro",
  run: async(req, res) => {
    var eur = await tcmbdoviz.getExchangeRate('EUR')
    res.send(
      eur
    )
  }
}