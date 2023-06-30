import styles from "./styles.module.scss"

export default function Nav() {
    return <nav className={styles.navbar}>
        <ul>
            <li><a href="#about-me">about:me</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#tech">tech</a></li>
            <li><a href="#contacts">contacts</a></li>
        </ul>
    </nav>
}