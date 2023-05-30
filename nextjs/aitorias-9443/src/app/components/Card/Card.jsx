import Image from "next/image";

import getDogs from "./getDogs";

import styles from "./Card.module.css";

export default async function Card() {
  const dogs = await getDogs();

  return (
    <section className={styles.cards}>
      {dogs.map((dog) => (
        <article key={dog.name} className={styles.card}>
          <Image
            className={styles.image}
            src={dog.image}
            alt={dog.name}
            width={250}
            height={250}
          />
          <div className={styles.breedDescription}>
            <h2 className={styles.breed}>{dog.name}</h2>
          </div>
        </article>
      ))}
    </section>
  );
}
