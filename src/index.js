const server = require('./server/app');

server.listen(server.get('port'), () => {
    console.log(`Server on lisen on port ${server.get('port')}`);
});