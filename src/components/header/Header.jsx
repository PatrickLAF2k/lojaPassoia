import logo from "../../assets/logo.png"
import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles.header} >
            <div>
                <a href="#main">
                    <img i src={logo} alt="" />
                </a>
            </div>
            <nav className={styles.navLinks}>
                <a href="#looks">LOOKS</a>
                <a href="#lancamentos">LANÇAMENTOS</a>
                <a href="#novidades">NOVIDADES</a>
            </nav>

            <nav className={styles.navBurguer} >
                <span></span>
                <span></span>
                <span></span>
            </nav>
        </header>
    )
}