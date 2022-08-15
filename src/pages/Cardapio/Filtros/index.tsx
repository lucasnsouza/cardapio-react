import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

interface IOpcao {
  label: string;
  id: number;
}

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: IOpcao) {
    //caso um filtro já esteja selecionado, clicar de novo nele
    //vai desmarcar o filtro selecionado
    if(filtro === opcao.id) {
      return setFiltro(null);
    }
    //essa função vai receber o id da opcao selecionada
    return setFiltro(opcao.id);
  }
  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
