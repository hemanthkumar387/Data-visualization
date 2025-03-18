import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Excel from './Components/Excel/Excel';
import Main from './Components/Main/Main';
import Form from './Components/Form/Form';
import Bargraph from './Components/Formdata/bargraph';
import ExcelChart from './Components/Exceldata/ExcelChart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/bargraph" element={<Bargraph/>} />
          <Route path="/excelchart" element={<ExcelChart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
