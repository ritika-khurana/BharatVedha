import React from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      
     <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pregnent' element={<Blog1/>}/>
          <Route path='/infantcare' element={<Blog2/>}/> 
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;