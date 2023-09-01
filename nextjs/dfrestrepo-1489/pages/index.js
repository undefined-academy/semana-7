import { useEffect, useState } from "react";

export default function Home() {
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const digListData = await fetch("api/dogs").then((data) => data.json());

      setDogList(digListData);
    }

    fetchArticles();
  }, []);

  const articlesMap = dogList.map((post) => (
    <div className="article">
      <h3>Nombre: {post.name}</h3>
      <img src={post.image} />
    </div>
  ));

  return (
    <>
      <h1>Hola dogs</h1>
      {articlesMap}
    </>
  );
}
