import express from 'express';
import * as atmController from './atmController';
import atmValidator from '../../middlewares/atmValidator';
import validatorHandler from '../../middlewares/validatorHandler';

const Router = express.Router();

Router.post(
    '/atms',
    atmController.add,
);

Router.get('/atms',
atmValidator.nearby,
validatorHandler,
atmController.nearby);

export default Router;
