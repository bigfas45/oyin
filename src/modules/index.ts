import { Express } from 'express';
import agentRouter from './agent';
import branchRouter from './branch';
import atmRouter from './atm';

const apiPrefix = '/api/v1';

const routes = [ agentRouter, branchRouter, atmRouter ];

export default (app: Express) => {
  routes.forEach((route) => app.use(apiPrefix, route));
  return app;
};
