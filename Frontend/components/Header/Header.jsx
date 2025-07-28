'use client'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.body}>
            <h1 onClick={() => window.location.href = '/'}>Bankraum</h1>
            <div className={styles.navigation}>
                <a href='/portfolio'>Portfolio</a>
                <a href='/blog'>Blog</a>
                <a href='/ueber'>Über mich</a>
                <a href='/kontakt'>Kontakt</a>
            </div>
        </div>
    )
}