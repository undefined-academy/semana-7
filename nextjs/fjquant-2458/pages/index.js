import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/card";
import styles from "../styles/Home.module.css"

const Dogs = () => {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogs = await fetch("/api/dogs")
          .then((res) => res.json())
        setDogs(dogs)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Layout pagina='inicio'>
        <div>
          <h1 className={styles.Title}> 10 random dogs Images</h1>
            <div className={styles.container}>
              {dogs.slice(0, 5).map((dog, index) => {
                return <Card key={index} title={dog.title} img={dog.img} />
              })}</div>
              <div className={styles.container}>
              {dogs.slice(5, 10).map((dog, index) => {
                return <Card key={index} title={dog.title} img={dog.img} />
              })}
            </div>
       </div>
      </Layout>
    </>
  );
};

export default Dogs;











// import { useEffect, useState } from 'react';
// import Layout from '@/components/Layout';
// import card from '@/components/card';
// import handler from './api/dogs';


// function Home() {
//   const [dog, setDog] = useState([]);

//   useEffect(() => {
//     async function fetchDogs() {
//       const Response = await fetch("/api/dogs").then((data) => data.json());

//       setDog(Response);
//     }

//     fetchDogs();
//   }, []);

//   return (
//     <>
//       <Layout
//         pagina='inicio'>

//         <h1>Random List of Dogs</h1>
//         <div>
//           {dog.map((url) => (
//             <card
//               key={url} />
//               ))}
//           <card />
//         </div>
//       </Layout>

//     </>

//   );
// }

// export default Home;