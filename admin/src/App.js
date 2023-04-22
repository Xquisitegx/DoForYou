import './App.css';
import View from './components/View'
import Login from './components/Login'
//import Update from './components/Update'
import ViewFiles from './components/ViewFiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main ">
    <div className="bg-primary">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/viewFiles" element={<ViewFiles/>}/>
      </Routes>
    </Router>
    </div>
  </div>
   
  );
}

export default App;