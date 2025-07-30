'use client'

import productAPI from '@/lib/api/product'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Product from '@/components/Product/Product'

export default function PortfolioPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const products = await productAPI.getAll()
            console.log(products)
            setProducts(products)
        }
        
        loadProducts();
    }, [])

    return (
        <div className={styles.body}>
            <p className={styles.Title}>Products</p>
            {products.map((product, i) => (
                <Product key={i} product={product}/>
            ))}
        </div>
    )
}