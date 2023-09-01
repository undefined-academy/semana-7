import styles from "./Card.module.css";

export const Card = ({image, text}) => (
    <article className={styles.card}>
      <figure>
        <img className="" src={image} alt={text} />
      </figure>
      <div className={styles["card-chip-name"]}>{text}</div>
    </article>
)