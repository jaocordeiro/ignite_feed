import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import mock from './mock/mock';
import './global.css'

export interface PostType {
  author: {
    avatarUrl: string,
    name: string,
    role: string
  };
  content: {
    type: string,
    content: string,
  }[];
  publishedAt: Date;
}


function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {mock().map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
