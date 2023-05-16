import React from 'react';
import './App.css';
import PageNavbar from './components/global/PageNavbar';
import InfoPage from './components/info_page/InfoPage';
import PageFooter from './components/global/PageFooter';

function App() {
  return (
    <div className="App">
        <PageNavbar />

        {/* ROUTING */}
        <InfoPage />

        <PageFooter/>
    </div>
  );
}

export default App;
