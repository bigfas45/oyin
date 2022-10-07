import express from 'express';
import * as agentController from './agentController';
import agentValidator from '../../middlewares/agentValidator';
import validatorHandler from '../../middlewares/validatorHandler';

const Router = express.Router();

Router.get(
  '/agents',
  agentValidator.nearby,
  validatorHandler,
  agentController.nearby
);

export default Router;
