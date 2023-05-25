import Dog from "@/components/Dog/Dog";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
    <main className={`${styles.main}`}>
      <Dog />
    </main>
    </>
  );
}
