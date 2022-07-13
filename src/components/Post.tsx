import { format, formatDistanceToNow } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'



export function Post({ author, publishedAt, content }) {
    const publishedDateFormated = format(publishedAt, "d LLLL 'at' HH:mm'h'", {
        locale: enGB,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enGB,
        addSuffix: true,
    })
    // const publishedDateFormated = new Intl.DateTimeFormat('en-GB', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishedAt)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map((line, index) => {
                        if (line.type === 'paragraph') {
                            return <p>{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p><a href="">
                                {line.content}
                            </a></p>
                        }
                    })
                }
                {/* <p>Hello guys 👋</p>

                <p>I'm a software developer and I love to write code.</p>
                <p>👉{' '}<a href="">mhayk.com</a></p>
                <p>
                    <a href="">#js</a>{' '}
                    <a href="">#ts</a>{' '}
                    <a href="">#reactjs</a>
                </p> */}
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder='Leave a comment...'
                />

                <footer>
                    <button type="submit">Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article >
    )
}