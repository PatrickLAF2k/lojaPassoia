import banner from "../../assets/bannerPrincipal.jpg"
import styles from "./Main.module.scss"

export default function Main() {
    return (
        <section id="main" className={styles.sectionMain} >
            <figure >
                <img src={banner} alt="" />
            </figure>
        </section>

    )
} 