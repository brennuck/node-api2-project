const server = require('./api/server.js');

server.listen(1234, () => {
    console.log('\n*** Server Running on http://localhost:1234 ***\n')
});