import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import Pte from './components/Pte';
import IELTS from './components/IELTS'
import Japan from './components/Japan'
import StudyUSA from "./components/StudyUSA"
import StudyUK from "./components/StudyUK"
import StudyJapan from "./components/StudyJapan"
import StudyCanada from "./components/StudyCanada"
import JLPT from "./components/JLPT.js"
import JFT from "./components/JFT.js"
import JCERT from "./components/JCERT.js"
import Gallery from  "./components/Gallery.js"
import Contact from "./components/Contact.js"
import Mentor from "./components/Mentor.js"

function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/aboutus" element={<AboutUs/>} /> */}
      <Route path='/classes/pte' element={<Pte/>}/>
      <Route path='/classes/ielts' element={<IELTS/>}/>
      <Route path='/classes/japan' element={<Japan/>}/>
      <Route path='/study-abroad/usa' element={<StudyUSA/>} />
      <Route path='/study-abroad/uk' element={<StudyUK/>} />
      <Route path='/study-abroad/japan' element={<StudyJapan/>} />
      <Route path='/study-abroad/canada' element={<StudyCanada/>} />
      <Route path='/classes/japan/jft' element={<JFT/>}/>
<Route path='/classes/japan/jlpt' element={<JLPT/>}/>
{/* <Route path='/classes/japan/jcert' element={<JCERT/>}/> */}
<Route path='/contact' element={<Contact/>}/>

<Route path='/gallery' element={<Gallery/>}/>
<Route path='/mentor' element={<Mentor/>}/>



      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
