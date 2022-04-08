const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

router.get('/health', (req, res) => {
  res.status(200).send('Ok');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
