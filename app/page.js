const skills = {
  content: [
    "Content Writing",
    "Technical Writing",
    "SEO",
    "MS Word",
    "Google Docs",
    "CMS Platforms",
  ],
  project: [
    "Project Planning",
    "Stakeholder Communication",
    "Jira",
    "Trello",
    "MS Teams",
    "Agile Basics",
  ],
};

const projects = [
  {
    name: "Ask Maharaj",
    description:
      "AI-powered spiritual assistant based on Vachanamrut for the Swaminarayan community. Supports 6 languages, voice input, WhatsApp sharing, and is installable as a PWA.",
    tags: ["AI", "Multilingual", "PWA", "Community"],
    link: "https://www.askmaharaj.com",
  },
  {
    name: "Hari Kirtan",
    description:
      "A devotional kirtan platform with lyrics, audio playback, and AI-powered line-by-line explanations for the global Swaminarayan satsang community.",
    tags: ["AI", "Audio", "Next.js", "Community"],
    link: "https://hari-kirtan-two.vercel.app",
  },
  {
    name: "StreamLume",
    description:
      "A curated movie streaming platform featuring 500+ films across 10 genres with Oscar winners, ratings, and a clean Netflix-style experience.",
    tags: ["Streaming", "TMDB", "Next.js", "Full Stack"],
    link: "https://www.streamlume.com",
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section
        id="hero"
        className="hero-bg grid-bg relative flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center overflow-hidden sm:py-20"
      >
        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center -translate-y-2 sm:-translate-y-3">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8832a] mb-5">
            Content · Strategy · Product
          </p>
          <h1 className="text-5xl sm:text-8xl font-bold tracking-tight leading-none mb-5">
            Denish Shah
          </h1>
          <h2 className="text-lg sm:text-2xl font-medium text-white/60 mb-6 tracking-wide text-balance max-w-xl">
            Content Strategist &amp; IT Project Coordinator
          </h2>
          <p className="text-base sm:text-lg text-white/40 mb-10 max-w-lg mx-auto leading-relaxed italic text-balance">
            &ldquo;I build real products and lead teams that ship them.&rdquo;
          </p>
          <div className="flex w-full flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[#e8832a] text-white font-semibold rounded-full hover:bg-[#d4741f] active:scale-95 transition-all duration-200 text-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/15 text-white/80 font-semibold rounded-full hover:border-[#e8832a] hover:text-[#e8832a] active:scale-95 transition-all duration-200 text-sm"
            >
              Get In Touch
            </a>
          </div>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="mt-10 flex flex-col items-center gap-2 text-white/25 hover:text-white/40 transition-colors"
          >
            <span className="scroll-bounce-inner text-[10px] tracking-[0.25em] uppercase font-mono">
              Scroll
            </span>
            <span className="scroll-bounce-inner block w-px h-6 bg-white/20" />
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 px-6 sm:py-28">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 sm:flex-row sm:items-start">
          {/* Avatar placeholder */}
          <div className="shrink-0 w-28 h-28 rounded-full bg-[#1a1a1a] border-2 border-[#e8832a]/30 flex items-center justify-center text-2xl font-bold tracking-wider text-white/60 select-none font-mono">
            DS
          </div>
          <div className="w-full text-center sm:text-left">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#e8832a] mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
              Hi, I&apos;m Denish.
            </h2>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/60 sm:mx-0">
              Based in Surat, India. I bring 3 years of content writing and
              growing expertise in IT project coordination — helping teams
              communicate clearly and deliver on time. I also build real, live
              digital products used by real communities.
            </p>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="bg-[#0d0d0d] px-6 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#e8832a] text-center mb-3">
            What I bring
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            Skills &amp; Tools
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Content card */}
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#111] p-8 transition-colors duration-300 hover:border-[#e8832a]/20">
              <h3 className="font-mono text-[#e8832a] text-xs tracking-[0.25em] uppercase mb-7">
                Content &amp; Communication
              </h3>
              <ul className="space-y-3.5">
                {skills.content.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-white/75 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#e8832a] ring-2 ring-[#e8832a]/20 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project card */}
            <div className="h-full rounded-2xl border border-white/[0.06] bg-[#111] p-8 transition-colors duration-300 hover:border-[#e8832a]/20">
              <h3 className="font-mono text-[#e8832a] text-xs tracking-[0.25em] uppercase mb-7">
                Project Coordination &amp; Tools
              </h3>
              <ul className="space-y-3.5">
                {skills.project.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-white/75 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#e8832a] ring-2 ring-[#e8832a]/20 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center font-mono text-xs tracking-[0.25em] uppercase text-[#e8832a]">
            Live &amp; shipped
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            My Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-[#111] rounded-2xl p-7 border border-white/[0.06] hover:border-[#e8832a]/30 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-lg font-bold mb-3">{project.name}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#e8832a]/10 text-[#e8832a] border border-[#e8832a]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#e8832a] group-hover:text-white transition-colors duration-200"
                >
                  Visit Site
                  <ArrowUpRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-[#0d0d0d] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#e8832a] mb-3">
            Say hello
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Let&apos;s Work Together
          </h2>
          <p className="mb-10 leading-relaxed text-white/45 sm:mb-12">
            Have a project in mind, want to collaborate, or just want to say
            hi? My inbox is open.
          </p>

          <div className="flex flex-col items-center gap-5">
            <a
              href="mailto:hi@denish.me"
              className="text-xl sm:text-2xl font-bold text-[#e8832a] hover:text-white transition-colors duration-200 tracking-tight break-all"
            >
              hi@denish.me
            </a>
            <div className="w-px h-6 bg-white/10" />
            <a
              href="https://linkedin.com/in/denishshah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/45 hover:text-[#e8832a] transition-colors duration-200 text-sm font-mono"
            >
              linkedin.com/in/denishshah
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.05] px-6 py-8 text-center">
        <p className="mx-auto max-w-md font-mono text-xs leading-relaxed text-white/25">
          &copy; 2026 Denish Shah &middot; Built with Next.js &amp; Tailwind
        </p>
      </footer>
    </div>
  );
}
