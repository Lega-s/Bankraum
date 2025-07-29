'use client'

import styles from "./page.module.css";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
	return (
		<div className={styles.body}>
			<img src="/Image1.JPG" alt="Bild konnte nicht geladen werden" height={1280} width={1920} />
			<div className={styles.FVContainer}>
				<h1 className={styles.ImageTitle}>Einblick in meine Werkstatt</h1>
				<div className={styles.LinkToPortfolio} onClick={() => window.location.href = '/portfolio'}>
					<p href="/portfolio">Portfolio entdecken</p>
					<FaArrowRight className={styles.ArrowIcon} />
				</div>
			</div>

			<div className={styles.MainSection}>
				<div className={styles.LeftBox}>
					<p>Projekte, Inspirationen und Kreativität</p>
					<img src="/amboss.jpg" alt="" height={413} width={620}/>
				</div>
				<div className={styles.RightBox}>
					<p>Die Idee für dieses Stück kam mir, als ich eine alte Küchenschublade auf dem Sperrmüll gefunden habe. Eigentlich wollte ich sie nur auseinandernehmen, aber beim RDie Idee für dieses Stück kam mir, als ich eine alte Küchenschublade auf dem Sperrmüll gefunden habe. Eigentlich wollte ich sie nur auseinandernehmen, aber beim R

Die Idee für dieses Stück kam mir, als ich eine alte Küchenschublade auf dem Sperrmüll gefunden habe. Eigentlich wollte ich sie nur auseinandernehmen, aber beim R

					</p>
					<button>Zum Blog</button>
				</div>
			</div>
		</div>
	);
}
