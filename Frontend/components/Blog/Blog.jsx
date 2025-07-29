import styles from './Blog.module.css'

export default function Blog({ blog }) {

    const now = new Date();
    const uploaded = new Date(blog.Uploaded);

    const twoDays = 172800000;
    const isNew = now - uploaded <= twoDays;

    return (
        
        <div className={styles.body}>
            <div className={styles.blogContainer}>
                {isNew ? (<h1 className={styles.NewLable}>NEW POST</h1>) : ""}
                <div className={styles.blog}>
                    <img src={blog.Image} alt="" />
                    <div className={styles.buttomBlog}>
                        <p className={styles.BlogTitle}>{blog.Title}</p>
                        <p className={styles.BlogData}>{uploaded.toLocaleDateString("de-DE")}</p>
                    </div>
                    <p className={styles.BlogDescription}>{blog.Description}</p>
                </div>
            </div>
        </div>
    )
}