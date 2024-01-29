import '/src/components/header/Header.css';
import smallRight from '/src/assets/icons/small-right.png';
import smallLeft from  '/src/assets/icons/small-left.png';
import search from '/src/assets/icons/search.png';
import React, { useState } from 'react';

const Header = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
        <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="" />
          </button>

          <div className="header__search">
            <img src={search} alt="" />
            <input id="search-input" type="text" maxLength='800' autocorrect="off"  autocapitalize="off"  spellcheck="false" placeholder="O que você quer ouvir?" />
          </div>
        </div>

        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
    )
};


export default Header;
