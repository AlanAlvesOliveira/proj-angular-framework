import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import FormData from '../../interfaces/formData';
import './Home.scss';
import ListFormData from './ListaFormData/ListaFormData';


const Home: React.FC = () => {
    const [listFormData, setListFormData] = useState<FormData[]>([]);
  
  
    const handleAddFormData = (novo: FormData) => {
      setListFormData((prev) => {
        const updatedList = [...prev, novo];        
        return updatedList;
      });
    };
  
    return (
      <>
        <Form onSubmitForm={handleAddFormData} />
        <ListFormData list={listFormData} />
      </>
    );
  };
  
  export default Home;