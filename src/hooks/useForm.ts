import { useState } from 'react';


type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface UseFormHook<T> {
    formData: T;
    handleInputChange: (event: ChangeEvent) => void;
    handleSubmit: (event: ChangeEvent) => void;
}

type OnSubmitFunction<T> = (formData: T) => void;

const useForm = <T>(initialState: T, onSubmit: OnSubmitFunction<T>): UseFormHook<T> => {
    const [formData, setFormData] = useState<T>(initialState);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (event: ChangeEvent): void => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event: ChangeEvent): void => {
        event.preventDefault();
        onSubmit(formData);
    }

    return { formData, handleInputChange, handleSubmit };
}

export default useForm;