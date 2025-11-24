import labios from "../../assets/labios.png"
import olhos from "../../assets/olhos.jpg"
import rosto from "../../assets/rosto.png"
import tendencia from "../../assets/tendencia.png"
import styles from "./Looks.module.scss"


const dataBase = []

export default function Looks() {
    return (
        <section id="looks" className={styles.sectionLooks} >

            <h2 className={styles.h2Looks} >LOOKS E DICAS DE MAQUIAGEM</h2>

            <section className={styles.sectionBanners}>

                <div className={styles.divBanners} >
                    <img src={labios} alt="" />
                    <h2>LÁBIOS</h2>
                </div>

                <div className={styles.divBanners} >
                    <img src={olhos} alt="" />
                    <h2>OLHOS</h2>
                </div>

                <div className={styles.divBanners} >
                    <img src={rosto} alt="" />
                    <h2>ROSTO</h2>
                </div>

                <div className={styles.divBanners} >
                    <img src={tendencia} alt="" />
                    <h2>TENDÊNCIA</h2>
                </div>
            </section>
        </section>
    )
}