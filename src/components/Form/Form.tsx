import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import './Form.scss';
import FormData from "../../interfaces/formData";




interface FormProps {
    onSubmitForm: (data: FormData) => void; // Função passada pelo pai
}

const Form: React.FC<FormProps> = ({onSubmitForm}) => {


    const [formData, setFormData] = useState<FormData>({
        name: 'nome padrão',
        email: 'email padrão',    
        selecionado: false,    
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
        onSubmitForm(formData);
        //setFormData({ name: '', email: '' });
    }

    return (

        <form onSubmit={handleSubmit}>
            <h1>Formulário</h1>
            <Input label="Digite seu Nome" type="text" value={formData.name} name="name" onChange={handleInputChange} />
            <Input label="Digite seu Email" type="text" value={formData.email} name="email" onChange={handleInputChange} />
            <Button>Salvar</Button>
        </form>

    );
}
export default Form;