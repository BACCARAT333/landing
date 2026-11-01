import styles from './Features.module.css';

interface Feature {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const features: Feature[] = [
    {
        id: 1,
        icon: '⚡',
        title: 'Быстрая настройка',
        text: 'Запускайте проект за минуты — без сложной конфигурации и лишних шагов.',
    },
    {
        id: 2,
        icon: '🔒',
        title: 'Надёжность',
        text: 'Данные защищены современными стандартами безопасности на каждом этапе.',
    },
    {
        id: 3,
        icon: '📈',
        title: 'Рост без границ',
        text: 'Масштабируйтесь без ограничений по мере роста вашей аудитории.',
    },
];

export default function Features() {
    return (
        <section id="features" className={styles.features}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Почему выбирают нас</h2>
                <p className={styles.subtitle}>Всё, что нужно для старта и роста — в одном месте</p>
            </div>
            <div className={styles.grid}>
                {features.map((feature) => (
                    <div key={feature.id} className={styles.card}>
                        <div className={styles.icon}>{feature.icon}</div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardText}>{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
