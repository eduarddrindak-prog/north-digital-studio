import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { PortfolioProject } from "../projectData";

type ProjectCardProps = {
  project: PortfolioProject;
  index?: number;
};

const visualClasses = {
  vanta: "bg-[#05070a] text-white",
  lenoir: "bg-[#eee5d7] text-[#2f2924]",
  martin: "bg-[#f5f3ec] text-[#30332e]",
};

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-3xl border border-border bg-white/[0.02] transition-all duration-300 hover:-translate-y-2 hover:border-[#4F8EF7]/35 hover:bg-[#4F8EF7]/5 hover:shadow-[0_0_32px_rgba(79,142,247,0.08)]"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <Link to={project.href} className="block" aria-label={`View ${project.title} project`}>
        <div className={`relative h-64 overflow-hidden border-b border-border ${visualClasses[project.visual]}`}>
          {project.image ? (
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 p-6" aria-hidden="true">
              <div className="flex gap-2 opacity-50">
                <span className="h-2 w-2 rounded-full bg-current" />
                <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                <span className="h-2 w-2 rounded-full bg-current opacity-40" />
              </div>

              {project.id === "vanta" ? (
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em] opacity-60">
                    <span>AI infrastructure</span>
                    <span className="text-[#4F8EF7]">Live system</span>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em]">
                    <span className="rounded border border-white/15 px-2 py-1 opacity-70">Input</span>
                    <span className="h-px flex-1 bg-[#4F8EF7]/60" />
                    <span className="notranslate rounded border border-[#4F8EF7]/40 px-2 py-1 text-[#8bb5ff]">VANTA</span>
                    <span className="h-px flex-1 bg-[#4F8EF7]/60" />
                    <span className="rounded border border-white/15 px-2 py-1 opacity-70">Output</span>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 rounded-2xl border border-current/15 bg-white/35 p-5">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em] opacity-60">
                    <span className="notranslate">Atelier Martin</span>
                    <span>Request flow</span>
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-current opacity-40" />
                    <span className="h-px flex-1 bg-current/25" />
                    <span className="h-2 w-2 rounded-full bg-current opacity-60" />
                    <span className="h-px flex-1 bg-current/25" />
                    <span className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <div className="mt-3 text-center text-xl font-semibold tracking-tight">Everyday jobs</div>
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6 h-px bg-current/20" />
            </div>
          )}

          <span className="absolute left-6 top-6 rounded-full border border-current/25 bg-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
            {project.status}
          </span>
        </div>

        <div className="p-6 md:p-7">
          <p className="text-xs uppercase tracking-[0.25em] text-[#4F8EF7]">
            {project.category}
          </p>

          <h3 className="notranslate mt-3 text-2xl font-medium text-primary-text transition-colors duration-300 group-hover:text-[#4F8EF7]">
            {project.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-secondary-text">
            {project.description}
          </p>

          <ul className="mt-7 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3 text-sm text-primary-text">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4F8EF7]" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <span className="mt-8 flex items-center gap-2 text-sm text-secondary-text transition-colors duration-300 group-hover:text-[#4F8EF7]">
            View project
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}

