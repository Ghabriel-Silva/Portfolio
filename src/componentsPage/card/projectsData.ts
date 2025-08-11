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
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["figma" , "Html", "css", "js"],
  },
  {
    imgCard: ["c"],
    titleDescription: "Gerador de Currículos",
    textDescription: "Ui/Website",
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["figma","notion", "css", "Html",  "js", "react"],
  },
  {
    imgCard: ["gappelt"],
    titleDescription: "Easy Food",
    textDescription: "Softaware",
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["js", "nodeJs","handlebars", "Html", "mysql"],
  },
  {
    imgCard: ["qualis"],
    titleDescription: "Qualis 5S",
    textDescription: "Software (Em desenvolvimento)",
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["typescript", "react", "chakraUi", "nodeJs", "typeOrm", "mysql"],
  },
  
];