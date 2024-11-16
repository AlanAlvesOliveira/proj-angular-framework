import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import FormData from '../../interfaces/formData';
import './Home.scss';

const Home: React.FC = () => {
  const [listFormData, setListFormData] = useState<FormData[]>([]);
  const [animatedIndex, setAnimatedIndex] = useState<number | null>(null);

  const handleAddFormData = (novo: FormData) => {
    setListFormData((prev) => [...prev, novo]);

    // Define o índice do último item adicionado para animar
    setAnimatedIndex(listFormData.length);

    // Remove a animação após um tempo
    setTimeout(() => setAnimatedIndex(null), 500); // Deve coincidir com o tempo da animação
  };

  return (
    <>
      <Form onSubmitForm={handleAddFormData} />

      <div className="alinhamento">
        {listFormData.map((item, index) => (
          <div
            key={index}
            className={`itemLista ${animatedIndex === index ? 'animate' : ''}`}
          >
            <h5>Item: {index}</h5>
            <p>Nome: {item.name} </p>
            <p>Email: {item.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
