import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validatorHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorInfo = errors.array({ onlyFirstError: true });
            const errorMessage = errorInfo[0].msg;

            return res.status(400).json({ message: errorMessage});
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export default validatorHandler;
