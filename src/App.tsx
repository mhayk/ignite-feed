import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mhayk.png',
      name: 'Mhayk Whandson',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello guys 👋' },
      { type: 'paragraph', content: 'I\'m a software developer and I love to write code.' },
      { type: 'link', content: 'mhayk.com' },
    ],
    publishedAt: new Date('2022-07-08 16:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mhayk.png',
      name: 'Mhaylson Whandson',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello guys 👋' },
      { type: 'paragraph', content: 'I\'m a software developer and I love to write code.' },
      { type: 'link', content: 'mhayk.com' },
    ],
    publishedAt: new Date('2022-07-08 16:30:00'),
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
