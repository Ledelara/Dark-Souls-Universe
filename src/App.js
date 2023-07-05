import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// pages
import Home from './pages/Home/Home';
import DarkSouls from './pages/DarkSouls/DarkSouls';
import DarkSouls2 from './pages/DarkSouls2/DarkSouls2';
import DarkSouls3 from './pages/DarkSouls3/DarkSouls3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

         {/* Body */}

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dark-souls' element={<DarkSouls />}/>
          <Route path='/dark-souls-2' element={<DarkSouls2 />}/>
          <Route path='/dark-souls-3' element={<DarkSouls3 />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
