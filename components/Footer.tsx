import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.inner}>
                <span className={styles.copy}>© 2026 Lendо. Все права защищены.</span>
                <nav className={styles.links}>
                    <a className={styles.link} href="#features">Возможности</a>
                    <a className={styles.link} href="#pricing">Цены</a>
                    <a className={styles.link} href="mailto:hello@lendo.ru">hello@lendo.ru</a>
                </nav>
            </div>
        </footer>
    );
}
