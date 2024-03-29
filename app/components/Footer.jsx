import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="mt-36 bg-primary text-white md:p-16 pb-10 lg:px-40 xl:px-60 grid md:grid-cols-3 justify-evenly ">
        <div className="flex flex-col">
          <h3 className="footer-head">Resources</h3>

          <Link href={"/"} className="footer-li">
            About Us
          </Link>
          <Link href={"/"} className="footer-li">
            Contact Us
          </Link>
          <Link href={"/"} className="footer-li">
            Belgard Catalog
          </Link>
          <div className="flex gap-2 items-center mt-2">
            <a
              href={"https://www.facebook.com/ARChchangeslives/"}
              target="_blank"
            >
              <Image
                src={"/assets/facebook.png"}
                alt="facebook logo"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="footer-head">Services</h3>
          <Link href={""} className="footer-li">
            Outcropping Walls
          </Link>
          <Link href={""} className="footer-li">
            Patios
          </Link>
          <Link href={""} className="footer-li">
            Fire Pits
          </Link>
          <Link href={""} className="footer-li">
            Lake Shore Renovation
          </Link>
          <Link href={""} className="footer-li">
            Lighting
          </Link>
        </div>
        <div>
          <h3 className="footer-head">Reach Out</h3>
          <p className="footer-li">Phone: 262-224-1086</p>
          <p className="footer-li">MattMcGuire22@gmail.com</p>
        </div>
      </footer>
      <div className="bg-primaryHov p-4 text-center text-white">
        &copy; 2024 by McGuire Landscape Co, All Rights Reserved{" "}
      </div>
    </>
  );
};

export default Footer;
