import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import './Form.scss';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Form: React.FC<FormData> = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData, [name]:value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (

        <form onSubmit={handleSubmit}>
            <h1>Formulário</h1>
            <Input label="Digite seu Nome" type="text" value={formData.name} name="name" onChange={handleInputChange} />
            <Input label="Digite seu Email" type="text" value={formData.email} name="email" onChange={handleInputChange} />
            <Button label="Salvar" />
        </form>

    );
}
export default Form;