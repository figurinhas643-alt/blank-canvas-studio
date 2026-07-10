import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Biblioteca Inteligente de Exercícios™ • +250 Aulas de Canto Prontas" },
      {
        name: "description",
        content:
          "Biblioteca Inteligente de Exercícios™ com +250 aulas de canto prontas em PDF. Respiração, afinação, belting, mix voice, falsete e muito mais — organizadas por habilidade e nível.",
      },
      { property: "og:title", content: "Biblioteca Inteligente de Exercícios™ • +250 Aulas de Canto Prontas" },
      {
        property: "og:description",
        content: "Biblioteca Inteligente de Exercícios™ com +250 aulas de canto prontas em PDF. Respiração, afinação, belting, mix voice, falsete e muito mais — organizadas por habilidade e nível.",
      },
    ],
  }),
});
