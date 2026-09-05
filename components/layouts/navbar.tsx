import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background border-b border-primary/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between  px-6 py-4">
        <Link href="/">
          <h2 className="font-heading text-primary text-2xl font-semibold">
            Portfolio
          </h2>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
