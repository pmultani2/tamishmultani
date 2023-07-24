const http = require('http');

const server = http.createServer((request, response) => {
  const { headers, method, url } = request;

  request.on('error', (err) => {
    console.error('request error');
    response.statusCode = 400;
    response.end();
  });

  response.on('error', (err) => {
    console.error('response error');
    response.end();
  });

  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')

  if (url === '/search') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const responseBody = { 
      address: '123 abc street'
    };
    response.write(JSON.stringify(responseBody));
    console.log('search response');
    response.end();
  }
  
}).listen(5500, () => {
  console.log('server listening on port 5500');
});