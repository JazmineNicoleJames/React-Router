import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Items from "./Items"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} /> 
          <Route path="/items/:name" element={<Items />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
