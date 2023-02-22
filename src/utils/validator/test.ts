import { string } from "./StringValidator";
import { schema } from "./validator";

const userSchema = schema({ email: string().required().email(), name: string().required().min(3).max(10) });

const errors = userSchema.validate({
    name: "John",
    email: ""
});

console.log(errors);