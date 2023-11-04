import Image from "next/image";
const SingleCard = ({
  image = "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4188.jpg",
  CardDescription = "soy la descripcion de la carta",
  CardTitle = "cardtitle",
  titleHref = "hola",
}) => {
  return (
    <article className="mb-10 overflow-hidden rounded-lg bg-slate-600 shadow-2xl">
      <Image src={image} alt="dog" width={300} height={300} className="" />
      <section className="p-8 text-left sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href={titleHref ? titleHref : "/#"}
            className="mb-4 block text-xl font-semibold text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="mb-7 text-base leading-relaxed text-white">
          {CardDescription}
        </p>
      </section>
    </article>
  );
};

export default SingleCard;
