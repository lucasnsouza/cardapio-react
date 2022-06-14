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

  //função para tste da busca
  function testaBusca(title: string) {
    //definindo regex case insentive
    //não faz diferença maiúsculas e minúsculas 
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  //função para teste do filtro
  function testaFiltro(id: number) {
    if(filtro !== null) {
      return filtro === id;
    }
    //se o filtro for vazio, ou null
    return true;
  }

  //função para ordenador
  function ordenar(novaLista: typeof cardapio) {
    switch(ordenador) {
        case 'porcao':
          //sort ordena os elementos, através de dois parâmetros
          //aqui de acordo com a porção
          return novaLista.sort((item1, item2) => item1.size > item2.size ? 1 : -1)
        case 'qtd_pessoas':
          return novaLista.sort((item1 , item2) => item1.serving > item2.serving ? 1 : -1)
        case 'preco':
          return novaLista.sort((item1, item2) => item1.price > item2.price ? 1 : -1)
        default:
          //no caso de nenhum ordenador selecionado, retrona a propria lista
          return novaLista;    
    }
  }

  //sempre que busca e filtro mudarem, useEffect atualiza
  useEffect(() => {
    //lsita de pratos a ser exibida de acordo com busca e filtros
    //método filter retorna um novo array de acordo com os itens que passaram nas funções de teste
    //no caso aqui os valores do novo array serão baseados no title e no category['id']
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

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
