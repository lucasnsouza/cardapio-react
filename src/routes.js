import Header from 'components/Header';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Header />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
    </Router>
  );
}