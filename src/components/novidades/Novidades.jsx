import maquiagens from "../../assets/bannerMaquiagens.jpg"

import styles from "./Novidades.module.scss"

export default function Novidades() {
    return (
        <section id="novidades" className={styles.sectionNovidades} >

            <h2>NOVIDADADES PARA VOCÊ</h2>

            <figure>
                <img src={maquiagens} alt="" />
            </figure>

        </section>
    )
}