import styles from './Button.module.css'

const button = (props) => {
  return (
    <>
        <button onClick={props.onClick} className={ props.isOutline ? styles.btnOutline : styles.btnPrimary}>{props.icon}{props.text}</button>
    </>
  )
}

export default button