const express = require('express');
const server = express();
const path = require('path');
const https = require('https')

let PORT = process.env.PORT || 4200;

server.use((req, res, next) => {
    console.log(`requested url: ${req.url}`);
    next();
})
// proxy images from images cors api
server.get('/image', (req, res, next) => {
    let picUrl = req.query.picUrl;
    return resolveImage(picUrl, res)
});

server.use(express.static(__dirname + '/dist'));

server.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

function resolveImage(picUrl, client_res) {
    return https.get(picUrl, function (response) {
        if (response.statusCode === 200) {
            client_res.writeHead(200, {
                'Content-Type': response.headers['content-type']
            });
            response.pipe(client_res);
        } else {
            client_res.writeHead(response.statusCode);
            client_res.end();
        }
    })
}