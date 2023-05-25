import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Card } from '@/components/Card'
import { useEffect, useState } from 'react'



export default function Home() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random/10")
        const data = await res.json()
       
        const imagesDogs = data.message
        const dogs = imagesDogs.map((image) => {
          const pattern = /breeds\/(.*?)\//
          const match = image.match(pattern)
          const breed = match[1].split('-').join(' ')
          return {
            title: breed,
            img: image,
          };
        })
        setDogs(dogs)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Random dogs</title>
        <meta name="description" content="Random dog cards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Random dogs</h1>
      <div className={styles.grid}>
        {dogs.map((dog, index) => {
          return <Card key={index} title={ dog.title } img={ dog.img } />
        })}
      </div>
    </main>
    </>
  )
}
