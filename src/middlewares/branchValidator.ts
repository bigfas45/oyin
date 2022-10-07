import { query } from 'express-validator';

const branchValidator = {
  nearby: [
    query('minimumDistance')
      .optional()
      .trim()
      .isInt({ min: 0, max: 5000 })
      .withMessage('Minimum distance must be from 0 to 5000'),
    query('maximumDistance')
    .optional()
      .trim()
      .isInt({ min: 5000, max: 5000000 })
      .withMessage('Maximum distance must be from 5000 to 5000000'),
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

export default branchValidator;
