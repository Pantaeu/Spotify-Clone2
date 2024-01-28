import React from "react";
import './Header.css';
import smallRight from  '/Users/panta/spotify-react/src/assets/icons/small-right.png';
import smallLeft from  '/Users/panta/spotify-react/src/assets/icons/small-left.png';
import search from '/Users/panta/spotify-react/src/assets/icons/search.png';

const Header = () => {
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
            <input id="search-input" type="search" maxLength='800' autocorrect="off" autocapitalize="off" spellcheck="false"
              placeholder="O que você quer ouvir?" />
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
