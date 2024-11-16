import React, { useState } from 'react'
import Form from '../../components/Form/Form';

interface FormData {
    name: string;
    email: string;   
}

const Home : React.FC = () => {

    
    const [listFormData, setListFormData] = useState<FormData[]>([]);

    const handleAddFormData = (novo: FormData) => {
        setListFormData((prev) => [...prev, novo ]);        
    };



    return (
        <>
            <Form onSubmitForm={handleAddFormData}/>
            {
                listFormData.map((item, index) => (
                    <p key={index}> {item.name} {item.email}</p>
                ))
            }    
        </>                           
    )
};
export default Home;
