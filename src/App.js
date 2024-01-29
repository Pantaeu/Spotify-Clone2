// Arquivo: App.js
import React, { useState } from 'react';
import './Styles/reset.css';
import './App.css';
import Header from '/src/components/header/Header';
import Sidebar from '/src/components/sidebar/Sidebar';
import Main from '/src/components/main/Main';
import Footer from '/src/components/footer/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <div>
      <Sidebar />
      <main>
        <Header />
        <Main />
      </main>
      <Footer />
    </div>
  );
}


export default App;
