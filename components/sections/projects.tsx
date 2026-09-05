import ProjectCard from "../cards/projectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl border-t border-primary/20 px-6 py-20"
    >
      {/* Section Heading */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
          My Work
        </p>

        <h2 className="mt-2 font-heading text-4xl font-semibold text-primary md:text-5xl">
          Featured Projects
        </h2>

        <div className="mx-auto mt-4 h-px w-20 bg-primary" />

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/70 md:text-lg">
          A selection of projects I've worked on using modern web technologies.
        </p>
      </div>

      {/* Projects */}
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="UIT Tech Fest"
          desc="Contributed with the technical team of UIT to create the Tech Fest website."
          technologies={[
            "Next.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Prisma",
            "PostgreSQL",
          ]}
          live="https://uittechfest.in/"
        />
        <ProjectCard
          title="Student Campuss Assistant"
          desc="Website which will help student to solve their daily college problem with the help of seniors and faculty."
          technologies={["React", "Express", "Node Js", "MongoDB"]}
          git="https://github.com/aquma106/studentCampusAssistant"
          live="https://student-campus-assistant-jowm.vercel.app/"
        />
        <ProjectCard
          title="Coffee Website"
          desc="First beginner project where i made a static design for a coffee shop."
          technologies={["HTML", "CSS"]}
          git="https://github.com/aquma106/coffee-project"
          live="https://coffeehtmlcss.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
