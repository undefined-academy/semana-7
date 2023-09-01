import styles from './Loader.module.css';

export const Loader = () => (
  <section className={styles.loader}>
    <div className={styles["lader-image"]}></div>
    <p>Search doggies...</p>
  </section>
);
