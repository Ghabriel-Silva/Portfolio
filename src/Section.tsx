import React, { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => (
  <section id={id}>
    {children}
  </section>
);

export default Section;
