import {Router} from 'express';
import testRouter from './test.routes';

const routes = Router();

routes.use('/', testRouter);

export default routes;
