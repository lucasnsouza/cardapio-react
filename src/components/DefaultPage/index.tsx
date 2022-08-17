import { Outlet } from 'react-router-dom';
import styles from './DefaultPage.module.scss';

export default function DefaultPage () {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div>
        <Outlet/>
      </div>
    </>
  );
}