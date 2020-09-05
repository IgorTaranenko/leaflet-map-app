const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('/*', (req, res) => {
 res.status(200).sendFile(HTML_FILE);
});

app.listen(port, () => {
 console.log('App listening on port: ' + port);
 console.log('To stop server press "ctrl+C"');
});