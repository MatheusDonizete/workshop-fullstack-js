import SignatureService from './services/signature.service';

async function routes (fastify: any) {
  const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          cost: { type: 'number' },
          dueDate: { type: 'string' },
          imageURL: { type: 'string' },
        }
      }
    }
  };

  fastify.get('/signatures', async () => {
      const signatures = await SignatureService.findAll();
      return signatures;
  });

  fastify.post('/signatures', opts, async (request: any) => {
    const { body } = request;
    body.dueDate = new Date(body.dueDate);
    const signature = await SignatureService.create(request.body);
    return signature;
  });
}

export default routes;
