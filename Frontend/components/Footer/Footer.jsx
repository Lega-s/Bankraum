import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.Links}>
            <div className={styles.Column}>
                <h4>Rechtliches</h4>
                <a href="/kontakt">Impressum</a>
                <p>© 2025 Bankraum</p>
            </div>
            <div className={styles.Column}>
                <h4>Kontakt</h4>
                <a href="https://www.instagram.com/samu_schaerer/" target='_blank'>Instagram</a>
                <p>info@bankraum@bankraum.ch</p>
            </div>
        </div>
    );
}