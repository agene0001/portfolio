const express = require('express')
const app = express()
const port = process.env.PORT || 8081; // Use the PORT from environment or default to 8080
// port = 8088
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, "0.0.0.0",() => {
    console.log(`Example app listening on port ${port}`)
})