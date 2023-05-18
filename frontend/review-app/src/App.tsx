import React from 'react';
import './App.css';
import PageNavbar from './components/global/PageNavbar';
import InfoPage from './components/info_page/InfoPage';
import PageFooter from './components/global/PageFooter';
import { HashRouter, Routes, Route } from "react-router-dom";
import ItemList from './components/item_list/ItemList';
import ReviewForm from './components/add_review/ReviewForm';

function App() {
  return (
    <div className="App">
        <PageNavbar />

        <HashRouter>
          <Routes>
            <Route path="" element={<ItemList />} />
            <Route path="/iteminfo" element={<InfoPage />} />
            <Route path="/itemlist" element={<ItemList />} />
            <Route path="/addreview" element={<ReviewForm />} />
          </Routes>
        </HashRouter>

        <PageFooter/>
    </div>
  );
}

export default App;
