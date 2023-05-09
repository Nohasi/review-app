import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageNavbar from './components/global/PageNavbar';
import InfoPage from './components/info_page/InfoPage';

function App() {
  return (
    <div className="App">
        <PageNavbar />

        {/* ROUTING */}
        <InfoPage />

        {/* FOOTER */}
    </div>
  );
}

export default App;
