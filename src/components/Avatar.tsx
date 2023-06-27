import styles from './Avatar.module.css'

interface ImageType {
  srcImg: string
  hasBorder: boolean
}

export function Avatar({ srcImg, hasBorder = true }: ImageType) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={srcImg} />
  )
}