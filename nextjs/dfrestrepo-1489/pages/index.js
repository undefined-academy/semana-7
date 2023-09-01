import { Card } from "@/components/card/Card";
import { Loader } from "@/components/loader/Loader";
import Head from "next/head";
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
    <Card key={post.name} image={post.image} text={post.name}></Card>
  ));

  return (
    <>
      <Head>
        <title>GuessTheBreed</title>
        <meta name="description" content="guessTheBreed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/guessTheBreed-icon.svg" />
      </Head>

      <main>
        <header>
          <img src="/guessTheBreed-logo.svg" />
        </header>

        <section className="intro-description">
          <p className="size-m">Are you a dog lover?</p>
          <p className="t-center">
            in this site you can check it.{" "}
            <span className="color-primary">
              Discover the breed by moseover on the dogs images.
            </span>
          </p>
        </section>

        {dogList[1] ? "" : <Loader />}
        <section className={dogList[1] ? "dog-list active" : "dog-list"}>
          {articlesMap}
        </section>

        <footer>
          <p>
            Practice week 7 of undefined Shell bootcamp for{" "}
            <a href="https://github.com/chapurestrepo" target="_blank">
              Daniel Restrepo
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
