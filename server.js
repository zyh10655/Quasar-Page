//Install express server
const express = require('express');
const app = express()
 
// Start the app by listening on the default Heroku port
app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})

app.listen(3000, () => console.log('server started'))
