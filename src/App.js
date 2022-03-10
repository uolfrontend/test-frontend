import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss';

import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Home } from './pages/home';
import { NewClient } from './pages/newClient';
import { EditModal } from './components/Modal';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/newclient" element={<NewClient />}/>
        </Routes>
        <EditModal/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
