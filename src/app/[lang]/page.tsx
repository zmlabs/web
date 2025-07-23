import Link from "next/link"

const projects = [
  {
    name: "CAPLY",
    description: "The AI captioning tool from live to summary",
    href: "/en-US/caply",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16">
          <h1
            className={`
              mb-8 font-brutalist text-8xl font-black tracking-tight uppercase
            `}
          >
            ZMLABS
          </h1>
          <div
            className={`
              border-4 border-black bg-primary p-8 text-primary-foreground
              shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            `}
          >
            <p className="font-brutalist text-2xl leading-relaxed font-bold">
              An independent development lab focused on creative software
              solutions.
            </p>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="mb-8 font-brutalist text-4xl font-black uppercase">
            PROJECTS
          </h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <Link
                key={project.name}
                className={`
                  group block transform transition-transform
                  hover:translate-x-2
                `}
                href={project.href}
              >
                <div
                  className={`
                    border-4 border-black bg-card p-6
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors
                    hover:bg-accent
                  `}
                >
                  <h3
                    className={`
                      mb-2 font-brutalist text-3xl font-black uppercase
                      decoration-4
                      group-hover:underline
                    `}
                  >
                    {project.name}
                  </h3>
                  <p
                    className={`
                      font-brutalist text-xl font-bold text-muted-foreground
                    `}
                  >
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer>
          <a
            className={`
              inline-block transform transition-transform
              hover:scale-105
            `}
            href="https://github.com/zhangyu1818"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div
              className={`
                border-4 border-black bg-secondary p-6
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-colors
                hover:bg-accent
              `}
            >
              <span className="font-brutalist text-2xl font-black uppercase">
                → GITHUB
              </span>
            </div>
          </a>
        </footer>
      </div>
    </div>
  )
}
