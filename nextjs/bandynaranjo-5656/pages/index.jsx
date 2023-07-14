import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Heading from "@/components/Heading";

function Home() {
  
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      const jsonResponse = await fetch("/api/dogs").then((data) => data.json());

      setArticles(jsonResponse);
    }

    fetchDogs();
  }, []);

  console.log(articles)
  return (
    <>
      <div className="body"> 
      <Heading size='lg' color='white' align='center'>✨Beautiful Dogs✨</Heading>
        <section className="post-list-container">
            {articles.map((article, index) => {
                return (
                    <Card
                    key={index}
                    {...article}
                    />
                )})}
        </section>
      </div>
    </>
  )
}

export default Home
