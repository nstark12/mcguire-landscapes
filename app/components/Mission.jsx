import Image from "next/image";

const Mission = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-20">
        <h2 className="md:text-5xl text-4xl font-bold text-secondary mx-4">
          From Concept to Completion: Crafting Your Dream Outdoor Space
        </h2>
        <h5 className="mt-4 text-xl md:text-2xl w-9/12">
          Our objective is to design captivating outdoor spaces that evoke joy
          and serenity for our clients and their families. We are committed to
          delivering top-tier craftsmanship in every project, ensuring that each
          outdoor area is distinguished by its uniqueness and exceptional
          quality.
        </h5>
      </div>
      <div className="flex mt-20 justify-center items-center bg-neutral p-6">
        <div className="flex flex-col mx-4">
          <h4 className="text-3xl font-bold mb-4 text-primary">
            All your landscaping needs
          </h4>
          <p className="md:text-2xl text-xl w-9/12">
            We offer comprehensive landscaping services, encompassing design,
            construction, and continuous care and maintenance.
          </p>
        </div>
        <div className="flex flex-col mx-4">
          <Image
            src={"/assets/leitner+outcropping.jpeg"}
            alt="landscaping stone retaining walls"
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default Mission;
