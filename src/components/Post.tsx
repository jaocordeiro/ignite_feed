import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar hasBorder srcImg="https://github.com/jaocordeiro.png" />
          <div className={styles.authorInfo}>
            <strong>Joao Vitor</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title='20 de Junho as 21:56' dateTime='2023-06-20 21:56:12'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de postar um novo artigo, espero que gostem, estudei e me apliquei muito no mesmo. vlw</p>
        <p><a href="#">site.dev/jaocordeiro</a></p>
        <p>
          <a href="#">#project</a>{' '}
          <a href="#">#dev </a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentlist}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}