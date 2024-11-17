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

  const handleRemoveItem = (index: number) => {
    setListFormData((prev) => prev.filter((_, i) => i !== index)); // Remove o item pelo índice
  };

  const handleSelectionItem = (index: number) => {
    console.log(listFormData);
    setListFormData((prev) => prev.map((item, i) => 
      ({ ...item, selecionado: i === index })
    ))
  };

  

  return (
    <>
      <Form onSubmitForm={handleAddFormData} />
      <ListFormData list={listFormData} onRemoveItem={handleRemoveItem} onSelecionItem={handleSelectionItem} />
    </>
  );
};

export default Home;