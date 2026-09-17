import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../consts";

// llms.txt (llmstxt.org convention): a plain-language index of the site for
// AI assistants and answer engines, generated from the same content
// collections as the HTML pages so it can't drift out of sync.
export const GET: APIRoute = async () => {
  const services = (await getCollection("services")).sort((a, b) => a.data.order - b.data.order);
  const projects = (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
  const faq = (await getCollection("faq")).sort((a, b) => a.data.order - b.data.order);

  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} (Turkish: mimari tasarım ve uygulama stüdyosu) is based in ${SITE.address.district}, ${SITE.address.city}, Türkiye, and serves ${SITE.areaServed.join(", ")}.`,
    "",
    "## Services",
    ...services.map(
      (s) => `- [${s.data.title} / ${s.data.titleTr}](${SITE.domain}/services/${s.id}): ${s.data.summary}`
    ),
    "",
    "## Projects",
    ...projects.map(
      (p) => `- [${p.data.title}, ${p.data.city} (${p.data.year})](${SITE.domain}/projects/${p.id}): ${p.data.summary}`
    ),
    "",
    "## Frequently asked questions",
    ...faq.map((f) => `- [${f.data.question}](${SITE.domain}/#faq)`),
    "",
    "## Studio",
    `- [Studio](${SITE.domain}/studio): background, team and how ${SITE.name} works.`,
    `- [Contact](${SITE.domain}/contact): ${SITE.email}, ${SITE.phoneDisplay}.`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
