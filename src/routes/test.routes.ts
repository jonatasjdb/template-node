import { Router } from 'express';

const testRouter = Router();

testRouter.get('/', (request,response) => {
  
  return response.json({ok: true});
})

testRouter.post('/', (request,response) => {
  const body = request.body();
  return response.json(body);
})

export default testRouter;
