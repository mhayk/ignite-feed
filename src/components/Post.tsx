import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/mhayk.png" />
                    <div className={styles.authorInfo}>
                        <strong>Mhayk Whandson</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                <time title="5 Jul 2022" dateTime="">Published at 1H</time>
            </header>

            <div className={styles.content}>
                <p>Hello guys 👋</p>

                <p>I'm a software developer and I love to write code.</p>
                <p>👉{' '}<a href="">mhayk.com</a></p>
                <p>
                    <a href="">#js</a>{' '}
                    <a href="">#ts</a>{' '}
                    <a href="">#reactjs</a>
                </p>
            </div>
        </article >
    )
}