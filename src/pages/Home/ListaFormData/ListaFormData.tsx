import FormData from "../../../interfaces/formData";
import React, { useEffect, useState } from "react";
import './ListaFormData.scss'

interface ListFormDataProps {
  list: FormData[];
  setSelecionado: (formData: FormData) => void
}

const ListFormData: React.FC<ListFormDataProps> = ({ list , setSelecionado}) => {
        

  const [animatedIndex, setAnimatedIndex] = useState<number>(-1); // Controla o índice do item animado

  useEffect(() => {
    if (list.length > 0) {
      setAnimatedIndex(list.length - 1); // Atualiza o índice do novo item sempre que a lista mudar
    }
  }, [list]); // Sempre que a lista mudar, a animação será aplicada ao último item

  return (
    <div className="alinhamento">
      {list.map((item, index) => (
        <div
          key={index}
          className={`itemLista ${index === animatedIndex ? 'animate' : 'animate-to-right'}`} // Aplica animação ao último item adicionado
        >
          <h5>Item: {index}</h5>
          <p>Nome: {item.name}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ListFormData;
