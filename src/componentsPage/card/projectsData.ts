import type { imageProjetos } from "@/componentsPage/card/imgContain";
import type { TechnologyKey } from "@/componentsPage/card/IconsDescription";

export interface Projeto {
  imgCard: imageProjetos[];
  titleDescription: string;
  textDescription: string;
  iconDescriptionText: string;
  iconDescriptionTechnologies: TechnologyKey[];
}

export const projetos: Projeto[] = [
  {
    imgCard: ["maquiadora"],
    titleDescription: "Site Maquiadora",
    textDescription: "Ui/WebSite",
    iconDescriptionText: "Desenvolvimento",
    iconDescriptionTechnologies: ["Html", "css", "js", "github", "figma", "vscodee"],
  },
  {
    imgCard: ["c"],
    titleDescription: "Gerador de Currículos",
    textDescription: "Ui/Website",
    iconDescriptionText: "Desenvolvimento",
    iconDescriptionTechnologies: ["css", "figma", "photoshop", "Html", "react", "js"],
  },
  {
    imgCard: ["gappelt"],
    titleDescription: "Easy Food",
    textDescription: "Ui Design",
    iconDescriptionText: "Prototyping",
    iconDescriptionTechnologies: ["figma", "photoshop", "notion"],
  },
  {
    imgCard: ["qualis"],
    titleDescription: "Qualis 5S",
    textDescription: "Ui/Sof (em desenvolvimento)",
    iconDescriptionText: "Desenvolvimento",
    iconDescriptionTechnologies: ["Html", "css", "js", "react", "nodeJs"],
  },
  {
    imgCard: ["uxui"],
    titleDescription: "Gappelt",
    textDescription: "Prototyping",
    iconDescriptionText: "Design",
    iconDescriptionTechnologies: ["figma", "photoshop", "canva", "notion"],
  },
  {
    imgCard: ["portfolio"],
    titleDescription: "Portfólio",
    textDescription: "Desenvolvimento",
    iconDescriptionText: "UI/Desenvolmento",
    iconDescriptionTechnologies: ["figma", "photoshop", "canva", "notion"],
  }
];