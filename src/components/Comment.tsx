import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

interface CommentType {
  content: string
  deleteComment: (content: string) => void
}

export function Comment({ content, deleteComment }: CommentType) {
  function handleDeleteComment() {
    deleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} srcImg="https://github.com/jaocordeiro.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vitor</strong>
              <time title='20 de Junho as 21:56' dateTime='2023-06-20 21:56:12'>Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}