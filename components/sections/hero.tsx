import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

import hemraj from "../../public/hemraj.png";

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-center gap-10 px-5 py-12 sm:px-6 sm:py-16 md:flex-row md:gap-12 md:justify-between lg:px-8 mt-6">
      {/* Hero Content */}
      <div className="w-full max-w-2xl flex-1 text-center md:text-left">
        <Badge className="px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm">
          Full Stack Developer
        </Badge>

        <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary sm:text-5xl md:mt-5 md:text-6xl lg:text-7xl">
          Hi, I'm Hemraj.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8 md:mx-0 md:mt-6">
          I like to develop software that solves real-world problems. I’m
          interested in web development using the MERN stack, Next.js, and
          PostgreSQL.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 md:justify-start">
          <Button>
            <Link href="#projects">View Projects</Link>
          </Button>

          <Button variant="outline">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex w-full flex-1 justify-center md:w-auto">
        <div className="relative flex h-64 w-64 items-center justify-center rounded-full border shadow-md sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
          <Image
            src={hemraj}
            alt="Hemraj"
            priority
            className="h-auto w-[75%] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
