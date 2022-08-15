import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
  //cria um novo array com o conteúdo de cardapio  
  let pratosRecomendados = [...cardapio];
  //algoritimo bem simples para ondenar aleatoriamente os itens do array
  //e retornar o array com uma nova ordem
  pratosRecomendados = pratosRecomendados.sort(()=> 0.5 - Math.random()).splice(0,3);

  return (
    <section>
      <h3 className={styles.titulo}>
        Recomendações da cozinha
      </h3>            
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={process.env.PUBLIC_URL + item.photo} alt={item.title}/>
            </div>
            <button className={styles.recomendado__botao}>
                Ver mais
            </button>
          </div>  
        ))}
      </div>
    </section>
  );
}