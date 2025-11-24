import batom1 from "../../assets/batom1.png"
import batom2 from "../../assets/batom2.png"
import batom3 from "../../assets/batom3.png"
import batomMarrom from "../../assets/batomMarrom.png"
import batomRosa from "../../assets/batomRosa.png"
import batomVermelho from "../../assets/batomVermelho.png"
import batomVinho from "../../assets/batomVinho.png"
import bocaVermelha from "../../assets/bocaVermelha.png"
import bocaMarrom from "../../assets/bocaMarrom.png"
import bocaRosa from "../../assets/bocaRosa.png"
import bocaVinho from "../../assets/bocaVinho.png"
import estrelas from "../../assets/estrelas.png"

import styles from "./Lancamentos.module.scss"

export default function Lancamentos() {
    return (
        <section id="lancamentos" className={styles.sectionLancamentos} >

            <h2 className={styles.h2Lancamentos} >APROVEITE OS LANÇAMENTOS</h2>

            <section className={styles.sectionInformacoes} >

                <figure className={styles.figureBatom} >
                    <img src={batom1} alt="" />
                    <img src={batom2} alt="" />
                    <img src={batom3} alt="" />
                </figure>

                <figure className={styles.figureBoca} >
                    <img src={bocaRosa} alt="" />
                </figure>

                <div className={styles.divInformacoes} >
                    <figure className={styles.figureEstrelas}>
                        <img src={estrelas} alt="" />
                    </figure>

                    <h3 className={styles.h3Matte} >Matte Premium</h3>

                    <p className={styles.pCores} >Cores disponíveis</p>

                    <div className={styles.divButtons} >
                        <button className={styles.vinho} ></button>
                        <button className={styles.vermelho} ></button>
                        <button className={styles.marrom} ></button>
                        <button className={styles.rosa} ></button>
                    </div>

                    <h3 className={styles.h3Descricao} >Descrição</h3>
                    <p>
                        O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
                    </p>
                </div>


            </section>
        </section>
    )
}