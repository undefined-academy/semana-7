import Head from "next/head";
import styles from "../../styles/Dogs.module.css"; 
import Select from "@/components/Select";
import Card from "@/components/Card";
import { useEffect, useState } from "react";


const Dogs = () => {

  const [dogs, setDogs] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const dogs = await fetch("/api/dogs")
          .then((res) => res.json())
        setDogs(dogs)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  },[])

  return (
    <>
      <Head>
        <title>Dogs API | Dog List</title>
        <meta name="keywords" content="dogs" />
      </Head>
      <div className="app">
      {/* <Select/> */}
      <h1> List of 10 different random dogs</h1>
        {dogs.slice(0,10).map((dog,index) =>{
          return <Card key={index} title={dog.title} img={dog.img} /> 
        })}
      </div>
    </>
  );
};

export default Dogs;
