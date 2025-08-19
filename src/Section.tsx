import React, { type ReactNode } from "react";
import MotionBox from "@/componentsPage/MotionBox";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => (
  <MotionBox
    as="section"
    id={id}
    scrollMarginTop="72px"           
    initial={{ opacity: 0, y: 40 }}           
    whileInView={{ opacity: 1, y: 0 }}        
    viewport={{ once: true }}                 
    transition={{ duration: 0.6, ease: "easeOut" }}
  
  >
    {children}
  </MotionBox>
);

export default Section;
