import Head from "next/head";
import styles from "../../styles/Dogs.module.css";

const Dogs = () => {
  return (
    <>
      <Head>
        <title>Dogs API | Dog List</title>
        <meta name="keywords" content="dogs" />
      </Head>
      <div>
        <h1 className={styles.title}>All Dogs</h1>
      </div>
    </>
  );
};

export default Dogs;
