const server = require('./server/app');
const { DBlisen } = require('./database/DBConnection');

server.listen(server.get('port'), async () => {
    await DBlisen();
    console.log(`Server lisen on port ${server.get('port')}`);
});