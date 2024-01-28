import React from "react";
import './Main.css';
import playlistCard1 from '/Users/panta/spotify-react/src/assets/playlist/1.jpeg'
import playlistCard2 from '/Users/panta/spotify-react/src/assets/playlist/2.png';
import playlistCard3 from '/Users/panta/spotify-react/src/assets/playlist/3.jpeg';
import playlistCard4 from '/Users/panta/spotify-react/src/assets/playlist/4.jpeg';
import playlistCard5 from '/Users/panta/spotify-react/src/assets/playlist/5.jpeg';
import playlistCard6 from '/Users/panta/spotify-react/src/assets/playlist/6.jpeg';
import playlistCard7 from '/Users/panta/spotify-react/src/assets/playlist/7.jpeg';
import playlistCard8 from '/Users/panta/spotify-react/src/assets/playlist/8.jpeg';
import playlistCard9 from '/Users/panta/spotify-react/src/assets/playlist/9.jpeg';
import playlistCard10 from '/Users/panta/spotify-react/src/assets/playlist/10.jpeg';
import playlistCard11 from '/Users/panta/spotify-react/src/assets/playlist/11.jpeg';
import playlistCard12 from '/Users/panta/spotify-react/src/assets/playlist/12.jpeg';
import playlistCard13 from '/Users/panta/spotify-react/src/assets/playlist/13.jpeg';
import playlistCard14 from '/Users/panta/spotify-react/src/assets/playlist/14.jpeg';
import playlistCard15 from '/Users/panta/spotify-react/src/assets/playlist/15.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

const Playlist = () => {
    return (
    <div className="playlist-container">
        <div id="result-playlists">
          <div className="playlist">
            <h1 id="greeting"></h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>

          
          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">

                <a href="#" className="cards">
                  <div className="cards card1">
                    <img src={playlistCard1} alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

                
                <a href="#" className="cards">
                  <div className="cards card2">
                    <img src={playlistCard2} alt="" />
                    <span>Feitos para você</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card3">
                    <img src={playlistCard3} alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card4">
                    <img src={playlistCard4} alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card5">
                    <img src={playlistCard5} alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card6">
                    <img src={playlistCard6} alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card7">
                    <img src={playlistCard7} alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card8">
                    <img src={playlistCard8} alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card9">
                    <img src={playlistCard9} alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card10">
                    <img src={playlistCard10} alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card11">
                    <img src={playlistCard11} alt="" />
                    <span>Rock</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card12">
                    <img src={playlistCard12} alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card13">
                    <img src={playlistCard13} alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card14">
                    <img src={playlistCard14} alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                <a href="#" className="cards">
                  <div className="cards card15">
                    <img src={playlistCard15} alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
              </div>
            </div> 
          </div>
          <div id="result-artist" className="hidden">
            <div className="grid-container">
              <div className="artist-card" id="">
                <div className="card-img">
                  <img id="artist-img" className="artist-img" />
                  <div className="play">
                    <span><FontAwesomeIcon icon={faPlay}/></span>
                  </div>
                </div>
                <div className="card-text">
                  <a title="Foo Fighters" className="vst" href="#"></a>
                  <span className="artist-name" id="artist-name"></span>
                  <span className="artist-categorie">Artista</span>
              </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Playlist;

