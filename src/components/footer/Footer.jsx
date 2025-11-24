import youtube from "../../assets/youtube.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import x from "../../assets/x.jpg"

import master from "../../assets/mastercard.png"
import visa from "../../assets/visa.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"

import styles from "./Footer.module.scss"


const dataBase = []

export default function Footer() {
    return (
        <footer className={styles.footer} >

            <nav className={styles.navAtendimento} >

                <h2>ATENDIMENTO</h2>

                <ul>
                    <li> <a href="">Fale Conosco</a> </li>
                    <li> <a href="">Perguntas Frequentes</a> </li>
                    <li> <a href="">Meus Pedidos</a> </li>
                    <li> <a href="">Nossas Lojas</a> </li>
                </ul>
            </nav>

            <div className={styles.divPagamentos} >

                <h2>FORMAS DE PAGAMENTO</h2>

                <div>
                    <img src={master} alt="" />
                    <img src={visa} alt="" />
                    <img src={pix} alt="" />
                    <img src={boleto} alt="" />
                </div>
            </div>

            <nav className={styles.navSociais} >

                <h2>SIGA-NOS NAS REDES SOCIAIS</h2>

                <ul>
                    <li> <a href="https://www.instagram.com/lorealgroupe_br/" target="_blank" rel="noopener noreferrer" ><img src={instagram} alt="" /></a> </li>
                    <li> <a href="https://www.facebook.com/lorealparisbrasil/?locale=pt_BR" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a> </li>
                    <li> <a href="https://www.youtube.com/user/lorealparisbrasil" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" /></a> </li>
                    <li> <a href="https://x.com/LorealParisBR" target="_blank" rel="noopener noreferrer"><img src={x} alt="" /></a> </li>
                </ul>
            </nav>

        </footer>
    )
}