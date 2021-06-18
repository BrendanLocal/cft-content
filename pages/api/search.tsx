import { pages } from '../../cache/data'

export default (req, res) => {
  const results = req.query.q ?
    pages.filter(page => page.contents.toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  
  res.end(JSON.stringify({ results }))

}