'use client'

import blogAPI from '@/lib/api/blog'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Blog from '@/components/Blog/Blog'

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogs = async () => {
            const blogs = await blogAPI.getAll()
            console.log(blogs)
            setBlogs(blogs)
        }
        
        loadBlogs();
    }, [])

    return (
        <div className={styles.body}>
            <p className={styles.Title}>Blogs</p>
            {blogs.map((blog, i) => (
                <Blog key={i} blog={blog}/>
            ))}
        </div>
    )
}