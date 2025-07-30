import styles from './Product.module.css'

export default function Product({ product }) {


    return (
        
        <div className={styles.body}>
            <div className={styles.product}>
                <p className={styles.BlogTitle}>{product.Name}</p>
                <img src={product.Image} alt="" />
                <p className={styles.BlogDescription}>{product.Description}</p>
                {product.available ? (<p>✅</p>) : ("")}
            </div>
        </div>
    )
}