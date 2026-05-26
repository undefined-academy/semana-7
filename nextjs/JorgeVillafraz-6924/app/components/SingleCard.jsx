import ImageWithFallback from "./ImageWithFallback";
const SingleCard = ({
  image = "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_4188.jpg",
  CardTitle = "cardtitle",
  titleHref = "#",
}) => {
  return (
    <article className="mb-10 overflow-hidden rounded-lg bg-slate-600 shadow-2xl">
      <ImageWithFallback
        src={image}
        fallbackSrc="/dogNotFound.jpg"
        width="300"
        height="300"
        className="w-full max-h-[250px] object-cover"
      />
      <section className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href={titleHref}
            className="mb-4 block text-xl font-semibold text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle.toUpperCase()}
          </a>
        </h3>
      </section>
    </article>
  );
};

export default SingleCard;
