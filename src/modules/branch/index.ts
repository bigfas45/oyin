import express from 'express';
import * as branchController from './branchController';
import branchValidator from '../../middlewares/branchValidator';
import validatorHandler from '../../middlewares/validatorHandler';

const Router = express.Router();

Router.post(
    '/branches',
    branchController.add,
);

Router.get('/branches',
branchValidator.nearby,
validatorHandler,
branchController.nearby);

export default Router;
