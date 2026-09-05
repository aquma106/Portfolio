import SkillCard from "../cards/skillCard";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl border-t border-primary/20 px-6 py-20"
    >
      {/* Section Heading */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
          My Skills
        </p>

        <h2 className="mt-2 font-heading text-4xl font-semibold text-primary md:text-5xl">
          Skills & Technologies
        </h2>

        <div className="mx-auto mt-4 h-px w-20 bg-primary" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/70 md:text-lg">
          Technologies and tools I use to build modern, scalable, and
          user-friendly applications.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SkillCard
          title="Frontend"
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Shadcn UI",
          ]}
        />

        <SkillCard
          title="Backend"
          skills={[
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "REST APIs",
            "Prisma",
          ]}
        />

        <SkillCard
          title="Tools & Others"
          skills={[
            "Git",
            "GitHub",
            "Vercel",
            "Next.js",
            "TypeScript",
            "Render",
          ]}
        />
      </div>
    </section>
  );
};

export default About;
