import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <span className={styles.badge}>Новая версия уже доступна</span>
            <h1 className={styles.title}>Ваш продукт здесь</h1>
            <p className={styles.subtitle}>
                Краткое описание преимуществ продукта: что он решает, для кого
                он нужен и почему стоит попробовать именно сейчас.
            </p>
            <div className={styles.actions}>
                <button className={styles.cta}>Попробовать</button>
                <button className={styles.secondary}>Узнать больше</button>
            </div>
        </section>
    );
}
