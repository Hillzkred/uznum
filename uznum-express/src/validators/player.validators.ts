import ajv from 'ajv';

const validator = new ajv();
const playerSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        scores: { type: 'array' },
    },
    required: ['name'],
}

export const validatePlayer = (player: any) => {
    const validate = validator.compile(playerSchema);
    if(!validate(player)) {
        console.error("Player is not valid");
        throw new Error(validate.errors?.map(error => error.message).join(', '));
    }
}