async function randomText(array) {
  let math = Math()
  return array[math.floor(math.random() * array.length)]
}
async function getfromreddit(subreddit) {
  const res = await (await fetch(`https://www.reddit.com/r/${subreddit}/random/.json`)).json()
  return res[0].data.children[0].data
}