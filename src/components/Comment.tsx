import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/mhayk.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mhayk Whandson</strong>
                            <time title="5 Jul 2022" dateTime="">Around 1h ago</time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Very good Mhayk, congratulations!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Clap <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}