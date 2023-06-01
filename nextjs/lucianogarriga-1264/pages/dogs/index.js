import Head from "next/head";
import styles from "../../styles/Dogs.module.css";
//https://dog.ceo/api/breeds/list/all
export const getStaticProps = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { dogs: data }
  }

}


const Dogs = ({ dogs }) => {
  return (
    <>
      <Head>
        <title>Dogs API | Dog List</title>
        <meta name="keywords" content="dogs" />
      </Head>
      <div>
        <h1 className={styles.title}>All Dogs</h1>
        {dogs.map(dog => ( 
          <div key={dog.id}>
            <h3>{dog.name}</h3>
          </div>
        ) )}
      </div>
    </>
  );
};

export default Dogs;
