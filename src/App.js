import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Tentang from './pages/Tentang';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/tentang" element={<Tentang />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
