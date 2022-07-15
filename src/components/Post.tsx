import { format, formatDistanceToNow } from 'date-fns'
import enGB from 'date-fns/locale/en-GB'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    },
    content: {
        type: 'paragraph' | 'link';
        content: string;
    }[];
    publishedAt: Date;

    onDelete?: () => void;
}

export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([
        'Post very cool, isn\'t it?',
    ])

    const [newCommentText, setNewCommentText] = useState('')

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

    function handleCreateNewComment(event: FormEvent) {
        event?.preventDefault()

        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Comment cannot be empty')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

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
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href="">{line.content}</a></p>
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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Leave a comment...'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        disabled={isNewCommentEmpty}
                        type="submit"
                    >Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article >
    )
}