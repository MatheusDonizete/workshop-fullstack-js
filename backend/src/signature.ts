import SignatureService from './services/signature.service';

async function routes (fastify: any) {
  const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          id: { type: 'number' },
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
    const signature = await SignatureService.save(request.body);
    return signature;
  });

  fastify.put('/signatures/:signature', opts, async (request: any) => {
    const id = request.params.signature;
    const signature = await SignatureService.save({ ...request.body, id });

    return signature;
  });

  fastify.delete('/signatures/:signature', async (request: any) => {
    await SignatureService.destroy(request.params.signature);
    return true;
  })
}

export default routes;
