module.exports = {
  name: "time",
  run: async(req, res) => {
    let timestamp = Math.floor(Date.now()/1000)
    let time = Date.now()
    res.json({
      sec: timestamp,
      milisec: time
    })
  }
}