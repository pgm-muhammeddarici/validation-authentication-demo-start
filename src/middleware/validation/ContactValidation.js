import { body } from 'express-validator';

export default [
    body('fullname')
        .notEmpty()
        .withMessage('Fullname is required')
        .bail()
        .isLength({ min: 2 })
        .withMessage('Fullname must be at least 2 characters long'),
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .bail()
        .isEmail()
        .withMessage('Invalid email'),
    body('message')
        .notEmpty()
        .withMessage('Phone is required')
        .bail()
        .isLength({min : 10})
        .withMessage('Message must be at least 10 characters long'),
];