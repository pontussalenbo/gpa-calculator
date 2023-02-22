import type { SchemaObj, ValidatorClass } from "./BaseValidator";


export type ErrorObj = Record<string, string[]>;

export const error = (field: string, errors: string[]): ErrorObj => ({
    [field]: errors,
});

class Validator {
    private readonly obj: Record<string, ValidatorClass>;

    public constructor(obj: SchemaObj) {
        this.obj = obj;
    }

    public validate(data: Record<string, string>): ErrorObj {
        const errors: ErrorObj = {};

        Object.entries(this.obj).forEach(([key, validator]) => {
            const value = data[key];
            const err = validator.validate(key, value);
            if (err.length) {
                errors[key] = err;
            }

        });
        return errors;
    }
}

export const schema = (obj: SchemaObj): Validator => {
    const validator = new Validator(obj);
    return validator;
}



