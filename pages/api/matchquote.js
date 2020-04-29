// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    quote: 'yee haw',
    articles: ['Ram Ranch',
      'McCree',
      'The South'],
    correct: 'The South',
  })
}
