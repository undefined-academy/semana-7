import styles from "./Card.module.css";

export const Card = ({image, text}) => (
    <a className={styles.card} href={`https://www.google.com/search?q=${text}`}>
      <figure>
        <img className="" src={image} alt={text} />
      </figure>
      <div className={styles["card-chip-name"]}>{text}</div>
    </a>
)