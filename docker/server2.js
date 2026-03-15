// server1.js
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Réponse du Serveur 2\n');
}).listen(3000, "0.0.0.0");
