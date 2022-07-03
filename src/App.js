import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Tentang from './pages/Tentang';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tentang" element={<Tentang />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
