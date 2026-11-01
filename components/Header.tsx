import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Lendо</span>
            <nav className={styles.nav}>
                <a className={styles.navLink} href="#features">Возможности</a>
                <a className={styles.navLink} href="#pricing">Цены</a>
                <a className={styles.navLink} href="#footer">Контакты</a>
            </nav>
            <button className={styles.cta}>Начать бесплатно</button>
        </header>
    );
}
