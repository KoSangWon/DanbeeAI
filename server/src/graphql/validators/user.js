import Joi from '@hapi/joi';

const email = Joi.string().email().required().label('email');
const username = Joi.string().max(255).min(2).required().label('username');
const password = Joi.string().max(50).min(6).required().label('password');
// .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\s*\d).*$/)
// .label("Password")
// .messages({
//     "string.regex":"Must have altest one lowercase letter, one uppercase letter and one digit"
// })

export const loginValidate = Joi.object().keys({
    email,
    password
});

export const registerValidate = Joi.object().keys({
    email,
    username,
    password
});