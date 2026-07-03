import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/badge";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Major Projects",
  description:
    "Flagship infrastructure and policy projects — what's under construction now and what's coming next.",
};

export default function ProjectsPage() {
  const inProgress = projects.filter((p) => p.status === "in-progress");
  const upcoming = projects.filter((p) => p.status === "upcoming");

  return (
    <>
      <PageHero
        kicker="Major Projects"
        title="Building Kenya,"
        accent="in the open."
        description="Every flagship project, with its current stage and progress — from what's rising today to what's coming next."
      />

      <section className="border-t border-black/10 bg-white py-20 lg:py-28">
        <Container>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-party-yellow" />
            <Kicker>In Progress</Kicker>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inProgress.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 bg-onyx-900 py-20 lg:py-28">
        <Container>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-forest-500" />
            <Kicker>Upcoming</Kicker>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
