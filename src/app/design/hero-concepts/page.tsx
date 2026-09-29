import type { Metadata } from "next";
import { HeroConceptGallery } from "@/components/design/HeroConceptGallery";

export const metadata: Metadata = {
  title: "Hero Concepts — Design Review",
  robots: { index: false, follow: false },
};

export default function HeroConceptsPage() {
  return <HeroConceptGallery />;
}
