import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center">
      <h4 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold text-center mx-4 w-9/12">
        Seamless Design, Impeccable Landscape, Expertly Constructed: Your
        Outdoor Oasis Awaits
      </h4>
      <div className="mt-12">
        <Link href={"#"}>
          <button className="bg-primary hover:bg-primaryHov text-white py-2 px-6 rounded-full mr-4 md:text-2xl hover:bg-secondaryHov cursor-pointer border border-white">
            Get an Estimate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
