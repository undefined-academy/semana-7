"use client";
import CardsContainer from "./components/CardsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <CardsContainer />
    </main>
  );
}
