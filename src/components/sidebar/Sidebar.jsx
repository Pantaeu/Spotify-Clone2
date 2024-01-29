import React from "react";
import '/src/components/sidebar/Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="#">
                    <img src={logoSpotify} alt=""/>
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="biblioteca">
            <div className="conteudo__biblioteca">
                <button className="botao__biblioteca">
                    <span><FontAwesomeIcon icon={faBook} /></span>
                    <span>Sua biblioteca</span>
                </button>
                <span><FontAwesomeIcon icon={faPlus} /></span>
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="botao__section-playlist">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <section className="section-podcast">
                <div className="section-podcast__content">
                    <span className="text title">Que tal seguir um podcast novo?</span>
                    <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                    <button className="botao__section-podcast">
                        <span>Explores podcasts</span>
                    </button>
                </div>
            </section>
            <div className="links">
                <a href="https://www.spotify.com/us/legal/end-user-agreement/">Legal</a>
                <a href="https://www.spotify.com/us/privacy">Centro de Privacidade</a>
                <a href="https://www.spotify.com/us/legal/privacy-policy/">Política de privacidade</a>
                <a href="https://www.spotify.com/us/legal/cookies-policy/">Cookies</a>
                <a href="https://www.spotify.com/us/accessibility">Acessibilidade</a>
                <a href="https://www.spotify.com/us/legal/notice-at-collection/">Nottion at Collection</a>
            </div>
            <div className="linguas">
                <button className="botao__linguas">
                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;
