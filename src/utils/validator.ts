class Validator {
    private readonly errors: Record<string, string> = {};

    private readonly schema: Record<string, any> = {};

    public getErrors(): Record<string, string> {
        return this.errors;
    }



}


const defineSchema = (schema: Record<string, string>): Record<string, string> => {


}

const string = (): object => ({
    isString: true,
})

const required = (): object => ({
    required: true,
})

class propDef {

}