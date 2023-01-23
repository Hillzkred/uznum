import ajv from 'ajv';

const validator = new ajv();
const userSchema = {
    type: 'object',
    properties: {
        username: {type: 'string'},
        password: {type: 'array'},
        role: {type: 'string'}
    },
    required: ['username', 'password', 'role'],
}

export const validateUser = (user: any) => {
    const validate = validator.compile(userSchema);
    if (!validate(user)) {
        console.error("User is not valid");
        throw new Error(validate.errors?.map(error => error.message).join(', '));
    }
}