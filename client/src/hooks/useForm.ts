import { FormEvent, useState } from "react";

type FormValues = {
    [key: string]: any; 
};

type OnSubmitHandler = (values: FormValues) => void;

export default function useForm<T extends FormValues>(
    primaryValues: T,
    onSubmitHandler: any
) {
    const [values, setValues] = useState<T>(primaryValues);


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues(state => ({ ...state, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
        setValues,
    };
}
