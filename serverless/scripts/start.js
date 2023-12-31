const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Url path ${req.url} does not match routes defined in services\n`);
  res.end();
});

server.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));