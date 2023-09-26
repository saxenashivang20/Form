import logo from './logo.svg';
import './App.css';
import Kyc1 from './components/Kyc1/Kyc1'
import Kyc3 from './components/Kyc3/Kyc3';
import Kyc2 from './components/Kyc2/Kyc2';
import { Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Routes> 
     
      <Route path="/" element={<Kyc1/>} />
      <Route path="/kyc2" element={<Kyc2/>} />
      <Route path="/kyc3" element={<Kyc3/>}/>
      
    </Routes>
  </div>

  );
}

export default App;
