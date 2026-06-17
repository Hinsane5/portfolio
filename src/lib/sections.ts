// Single source of truth for the in-page sections and their nav order.
export type SectionId =
  | "home"
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "contact";

export const sections: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
