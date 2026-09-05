import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import hemraj from "../../public/hemraj.png";

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-16 md:flex-row md:justify-between mb-4 mt-2">
      {/* Hero Content */}
      <div className="max-w-2xl flex-1">
        <Badge className="px-4 py-1.5 text-sm">Full Stack Developer</Badge>

        <h1 className="mt-5 text-6xl font-semibold leading-tight text-primary md:text-7xl">
          Hi, I'm Hemraj.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/80">
          I like to develop software that solves real-world problems. I’m
          interested in web development using the MERN stack, Next.js, and
          PostgreSQL.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button>
            <Link href="#projects">View Projects</Link>
          </Button>

          <Button variant="outline">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex flex-1 justify-center">
        <div className="relative flex h-80 w-80 items-center justify-center rounded-full border  shadow-md shadow-black md:h-96 md:w-96">
          <Image
            src={hemraj}
            alt="Hemraj"
            priority
            className="h-50 w-70 sm:h-60 sm:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
