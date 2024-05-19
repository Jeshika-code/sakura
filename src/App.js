import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      </Routes>
    </Layout>
    </BrowserRouter>
    
    </>
  );
}

export default App;
