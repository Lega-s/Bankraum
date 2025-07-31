import styles from './Product.module.css'

export default function Product({ product }) {


    return (
        <div className={styles.product}>
            <div className={styles.left}>
                <img src={product.Image} alt="" />
            </div>
            <div className={styles.right}>
                <p className={styles.BlogTitle}>{product.Name}</p>
                <p>{product.Description}</p>
                {product.available ? ("") : (<p className={styles.SoldLable}>verkauft</p>)}
            </div>
        </div>
    )
}