const { fullRandom, randomImage } = require("random-img-lib")
module.exports = {
  name: "animals/fox",
  run: async(req, res) => {
    const { message } = randomImage('foxes').then(message => res.json({ message }))
  }
}