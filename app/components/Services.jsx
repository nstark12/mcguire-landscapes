import Link from "next/link";
import Button from "./Button";

const Services = () => {
  return (
    <div className="mt-20 text-center my-4 flex flex-col justify-center items-center">
      <h4 className="text-5xl text-primary font-bold">Our Services</h4>
      <p className="mt-6 mb-6 text-xl w-9/12">
        From creating inviting firepits to building sturdy retaining walls, our
        landscaping services cover every aspect of outdoor transformation.
        Whether it's designing lush gardens, installing elegant patios, or
        maintaining vibrant lawns, we bring expertise and creativity to every
        project, ensuring your outdoor space is a true reflection of your vision
        and lifestyle.
      </p>
      <Link href={"#"}>
        <Button>Learn More</Button>
      </Link>
    </div>
  );
};

export default Services;
