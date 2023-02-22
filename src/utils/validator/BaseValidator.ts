import { ErrorObj } from "./validator";

export type SchemaObj = Record<string, ValidatorClass>;

interface IValidatorClass {
    validate: (name: string, value: unknown) => string[];
    required: () => this;
}

export abstract class ValidatorClass implements IValidatorClass {
    public abstract validate(name: string, value: unknown): string[];
    public abstract required(): this;
}