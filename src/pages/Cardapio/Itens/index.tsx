import styles from "./Itens.module.scss";
import cardapio from "./itens.json";
import Item from "./Item";
import { useEffect, useState } from "react";

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens({ busca, filtro, ordenador}: Props) {
  //lista de pratos a ser exibida
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    //definindo regex case insentive
    //não faz diferença maiúsculas e minúsculas 
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if(filtro !== null) {
      return filtro === id;
    }
    //se o filtro for vazio, ou null
    return true;
  }

  //sempre que busca e filtro mudarem, useEffect atualiza
  useEffect(() => {
    //lsita de pratos a ser exibida de acordo com busca e filtros
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(novaLista);
  }, [busca, filtro]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item 
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}
