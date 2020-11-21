import fastify from 'fastify';
import signature from './signature';
import { Sequelize } from 'sequelize';
import { init as signatureInit } from './models/Signature';

const sequelize = new Sequelize('sqlite::memory:');
sequelize.authenticate().then(async () =>  {
  console.log('Connection has been established successfully.');
  await signatureInit();
});

const server = fastify({
  logger: true
});

server.get('/ping', async (_, __) => 'pong\n')

server.register(signature);

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});