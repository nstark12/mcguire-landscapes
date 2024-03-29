import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto">
        <Mission />
        <Services />
      </div>
    </main>
  );
}
