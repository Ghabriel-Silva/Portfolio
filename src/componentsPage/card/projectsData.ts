import type { imageProjetos } from "@/componentsPage/card/imgContain";
import type { TechnologyKey } from "@/componentsPage/card/IconsDescription";

export interface Projeto {
  imgCard: imageProjetos[];
  titleDescription: string;
  textDescription: string;
  iconDescriptionText: string;
  iconDescriptionTechnologies: TechnologyKey[];
  funcionalidades: string[]
  textDialog: string
  linkGithub?: string
  linkProjeto?: string
}

export const projetos: Projeto[] = [
  {
    imgCard: ["maquiadora"],
    titleDescription: "Site Maquiadora",
    textDescription: "Ui/WebSite",
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["figma", "Html", "css", "js"],
    textDialog: "Projeto criado para uma maquiadora iniciando na carreira, buscando mais visibilidade. O site destaca seu trabalho com uma galeria de fotos, depoimentos e recomendações, além de permitir agendamento direto via WhatsApp. O objetivo foi criar uma presença digital funcional e atrativa, ajudando-a a conquistar mais clientes.",
    funcionalidades: [
      "Galeria de fotos",
      "Depoimentos de clientes",
      "Recomendações personalizadas",
      "Agendamento via WhatsApp"
    ],
    linkGithub: "https://github.com/Ghabriel-Silva/Site-maquiadora",
    linkProjeto: "https://ghabriel-silva.github.io/Site-maquiadora/"

  },
  {
    imgCard: ["c"],
    titleDescription: "Gerador de Currículos",
    textDescription: "Ui/Website",
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["figma", "notion", "css", "Html", "js", "react"],
    textDialog: "Ferramenta desenvolvida para facilitar a criação de currículos para pessoas com pouca familiaridade com tecnologia. Permite gerar um PDF rápido, inserindo apenas as informações desejadas, sem campos obrigatórios. O foco é tornar o processo simples, prático e acessível.",
    funcionalidades: [
      "Geração de currículo em PDF",
      "Campos opcionais",
      "Interface simples e intuitiva",
      "Rápida criação de currículo"
    ],
    linkGithub: "https://github.com/Ghabriel-Silva/gerador-cv",
    linkProjeto: "https://ghabriel-silva.github.io/gerador-cv/"
  },
  {
    imgCard: ["esyfood"],
    titleDescription: "Easy Food",
    textDescription: "Software",
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["js", "nodeJs", "handlebars", "Html", "mysql"],
    textDialog: "Sistema criado para resolver problemas de pedidos manuais em um estabelecimento de lanches. Organiza todo o fluxo de pedidos, reduz erros e agiliza o atendimento, trazendo controle e eficiência para o negócio.",
    funcionalidades: [
      "Gerenciamento completo de pedidos",
      "Redução de erros manuais",
      "Fluxo de atendimento otimizado",
      "Controle e eficiência no negócio"
    ],
    linkGithub: "https://github.com/Ghabriel-Silva/EasyFood",
    linkProjeto: "https://ghabriel-silva.github.io/EasyFood/"
  },
  {
    imgCard: ["qualis"],
    titleDescription: "Qualis 5S",
    textDescription: "Software (Em desenvolvimento)",
    iconDescriptionText: "Ver Projeto",
    iconDescriptionTechnologies: ["typescript", "react", "chakraUi", "nodeJs", "typeOrm", "mysql"],
    textDialog: "Plataforma voltada para a indústria, baseada no método 5S, para organizar e monitorar ambientes de trabalho. Oferece dashboards e relatórios, facilitando auditorias e melhorias, aumentando produtividade e qualidade operacional.",
    funcionalidades: [
      "Monitoramento de ambientes industriais",
      "Dashboards e relatórios",
      "Suporte a auditorias",
      "Melhoria contínua e produtividade"
    ],
    linkGithub: "#",
    linkProjeto: "#"

  },

];