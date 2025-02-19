import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout'
import Search from './pages/Search';
import Upload from './pages/Upload';
import History from './pages/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Search />}/>
          <Route path='/upload' element={<Upload />}/>
          <Route path='/history' element={<History />}/>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);