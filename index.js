const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/ABC', (req, res) => {
    res.send("App Deployed On Heroku");
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
