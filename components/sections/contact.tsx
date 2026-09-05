import { GitBranch, Mail, WifiPen } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl border-t border-primary/20 px-6 py-20"
    >
      {/* Section Heading */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
          Contact
        </p>

        <h2 className="mt-2 font-heading text-4xl font-semibold text-primary md:text-5xl">
          Get In Touch
        </h2>

        <div className="mx-auto mt-4 h-px w-20 bg-primary" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/70 md:text-lg">
          Have a project, opportunity, or just want to connect? Feel free to
          reach out.
        </p>
      </div>

      {/* Contact Links */}
      <Card className="mx-auto mt-12 max-w-2xl border-primary/15 bg-white shadow-sm">
        <CardContent className="grid divide-y divide-primary/10 p-0">
          {/* Email */}
          <Link
            href="mailto:thapahemraj141@gmail.com"
            className="group flex items-center gap-4 px-6 py-5 transition-colors duration-200 hover:bg-primary/5"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <Mail className="size-5" />
            </div>

            <div>
              <p className="text-sm text-foreground/50">Email</p>
              <p className="font-medium text-foreground group-hover:text-primary">
                thapahemraj141@gmail.com
              </p>
            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/hemraj106/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-5 transition-colors duration-200 hover:bg-primary/5"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <WifiPen className="size-5" />
            </div>

            <div>
              <p className="text-sm text-foreground/50">LinkedIn</p>
              <p className="font-medium text-foreground group-hover:text-primary">
                linkedin.com/in/hemraj106/
              </p>
            </div>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/aquma106"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-5 transition-colors duration-200 hover:bg-primary/5"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <GitBranch className="size-5" />
            </div>

            <div>
              <p className="text-sm text-foreground/50">GitHub</p>
              <p className="font-medium text-foreground group-hover:text-primary">
                github.com/aquma106
              </p>
            </div>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
