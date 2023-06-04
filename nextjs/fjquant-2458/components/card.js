import styles from "../styles/entrada.module.css"


const Card = ({title, img}) => {
  return (
    <div className={styles.entrada}>
        <img src={img} alt="dog" width={200} height={200}/>
        <p className={styles.nombre}>{title}</p>
    </div>
  )
}

export default Card
