import SingleCard from "./SingleCard";

const CardContainer = () => {
  return (
    <>
      <main className="bg-slate-800 p-10 pt-20 rounded-lg lg:pb-20 lg:pt-[120px]">
        <section className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </section>
      </main>
    </>
  );
};

export default CardContainer;
