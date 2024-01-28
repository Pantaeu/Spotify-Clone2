import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer class="premium">
    <div class="footer__premium">
        <div class="premium__texto">
            <h1>Teste o Premium de graça.</h1>
            <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito</p>
        </div>
        <button class="botao__premium">
            <span>Inscreva-se grátis</span>
        </button>
    </div>
</footer>
    );
};

export default Footer;