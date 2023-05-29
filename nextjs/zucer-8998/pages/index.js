import Head from "next/head";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";
import DogsList from "@/Components/DogsList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Doggy List</title>
        <meta name="description" content="Dog breed list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <div className={styles.container}>
          <h1>Dog Breeds List!</h1>
          <DogsList />
        </div>
      </main>
    </>
  );
}
