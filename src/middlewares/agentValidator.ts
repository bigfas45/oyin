import { query } from 'express-validator';

const agentValidator = {
  nearby: [
    query('minimumDistance')
      .optional()
      .trim()
      .isInt({ min: 0, max: 1000 })
      .withMessage('Minimum distance must be from 0 to 1000'),
    query('maximumDistance')
    .optional()
      .trim()
      .isInt({ min: 1000, max: 50000 })
      .withMessage('Maximum distance must be from 1000 to 50000'),
    query('longitude')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .trim()
      .withMessage('Longitude is required')
      .isFloat({ min: -180, max: 180 })
      .withMessage('Supply a valid longitude'),
    query('latitude')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .trim()
      .withMessage('Latitude is required')
      .isFloat({ min: -90, max: 90 })
      .withMessage('Supply a valid latitude'),
  ],
};

export default agentValidator;
