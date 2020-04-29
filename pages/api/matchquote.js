// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch'


export default async (req, res) => {

  const wikiRes = await fetch(
    'https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=4&rnnamespace=0')
    .then(wRes => wRes.json())
  console.log(wikiRes.query.random);

  const random = wikiRes.query.random;

  const correctId = random[0].id;

  const correctRes = await fetch(
    'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&pageids=' + correctId)
    .then(cRes => cRes.json())

    const links = correctRes.query.pages[correctId].links;

    const linkIndex = Math.floor(Math.random() * links.length);

    const mysteryLink = links[linkIndex].title;

  const names = random.slice(1, random.length).map((entry) => entry.title);

  res.statusCode = 200
  res.json({
    quote: mysteryLink,
    incorrect: names,
    correct: random[0].title,
  })
  console.log(new Date())
}