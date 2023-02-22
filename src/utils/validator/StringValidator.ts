import type { ValidatorClass } from "./BaseValidator";

/** REGEXES */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// eslint-disable-next-line
const URL_REGEX =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!$&'()*+,;=]|:|@)|\/|\?)*)?$/i;

// eslint-disable-next-line
const UUID_REGEX =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

/** VALIDATOR */
interface Validator {
    name: string;
    validate: (value?: string | null) => boolean;
}

export class StringValidator implements ValidatorClass {
    private readonly validators: Validator[] = [];

    private name = "";

    private readonly errors: string[] = [];

    public required(): this {
        this.validators.push({
            name: 'required',
            validate: (value) => {
                const valid = value !== undefined && value !== null && value !== '';
                if (!valid) {
                    this.errors.push(`${this.name} is required.`);
                }
                return valid;
            },
        });
        return this;
    }

    public email(): this {
        this.validators.push({
            name: 'email',
            validate: (value) => {
                const valid = EMAIL_REGEX.test(value ?? '');
                if (!valid) {
                    this.errors.push(`${this.name} must be a valid email.`);
                }
                return valid;
            },
        });
        return this;
    }

    public min(length: number, message?: string): this {
        this.validators.push({
            name: 'min',
            validate: (value) => {
                const valid = (value?.length ?? 0) >= length;
                if (!valid) {
                    this.errors.push(message ?? `${this.name} must be at least ${length} characters.`);
                };
                return valid;
            },
        });
        return this;
    }

    public max(length: number, message?: string): this {
        this.validators.push({
            name: 'max',
            validate: (value) => {
                const valid = (value?.length ?? 0) <= length;
                if (!valid) {
                    this.errors.push(message ?? `${this.name} must be less than ${length} characters.`);
                }

                return valid;
            },
        });
        return this;
    }

    public validate(name: string, value: string): string[] {
        this.name = name;
        this.validators.forEach((validator) => {
            validator.validate(value);
        });
        return this.errors;
    }
}
/**
 * generate a new string validator instance used to validate strings
 * given certain reuqirements, that can be chained together
 * @returns {ValidatorClass}
 */

export const string = (): StringValidator => {
    const validator = new StringValidator();
    return validator;
}