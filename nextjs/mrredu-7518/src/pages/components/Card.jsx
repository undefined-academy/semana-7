import styles from "./Card.module.css";

const Card = ({ children, imgUrl }) => {
  return (
    <>
      <article className={styles["container"]}>
        <header>
          <h2 className={styles["title"]}>{children}</h2>
        </header>
        <img
          className={styles["image"]}
          src={imgUrl}
          alt={children}
          width={150}
          height={150}
        />
      </article>
    </>
  );
};

export default Card;
