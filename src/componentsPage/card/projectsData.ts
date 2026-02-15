import type { imageProjetos } from "@/componentsPage/card/imageCardsIndex"
import type { TechnologyKey } from "@/componentsPage/card/IconsDescription"

export interface Projeto {
  imgCard: imageProjetos[]
  titleDescription: string
  textDescription: string
  iconDescriptionText: string
  iconDescriptionTechnologies: TechnologyKey[]
  funcionalidades: string[]
  textDialog: string
  linkGithub?: string
  linkProjeto?: string
}

export const projetos: Projeto[] = [

  
  {
    imgCard: ["easyfoodApi"],

    titleDescription: "EasyFood API",
    textDescription: "Backend / REST API",
    iconDescriptionText: "Ver Código",

    iconDescriptionTechnologies: [
      "nodeJs",
      "mysql",
      "js",
      "typeOrm",
      "handlebars",
      "typescript",
    ],

    textDialog:
      "API REST desenvolvida para gerenciar o sistema de pedidos do EasyFood, estruturada em arquitetura em camadas (Controller, Service e Repository) para garantir organização, escalabilidade e manutenibilidade. Utiliza Node.js com Express, TypeORM para persistência de dados em MySQL, validação com Yup e autenticação baseada em JWT.",

    funcionalidades: [
      "Arquitetura em camadas (Controller, Service, Repository)",
      "Persistência de dados com TypeORM e MySQL",
      "Validação de dados com Yup",
      "Autenticação e autorização com JWT",
      "Endpoints RESTful completos",
      "Separação da lógica de negócio do front-end",
    ],

    linkGithub: "https://github.com/Ghabriel-Silva/easyFood-api",
  },

  
  {
    imgCard: [
      "easyfoodLogin",
      "easyfoodHome",
      "easyfoodProducts",
      "easyfoodCreateOrder",
      "easyfoodVerOrder",
      "easyfoodLightOrder",
      "easyfoodNotFound", 
      "easyfoodVerProdutos"
    ],

    titleDescription: "EasyFood Web",
    textDescription: "Frontend / Aplicação Web",
    iconDescriptionText: "Ver Código",

    iconDescriptionTechnologies: [
      "Html",
      "css",
      "js",
      "react",
      "figma",
      "chakraUi",
      "typescript",
    ],

    textDialog:
      "Aplicação web responsável pela interface do sistema EasyFood, consumindo a API backend para gerenciamento completo dos pedidos. Permite criação, edição, exclusão e visualização de comandas, com foco em agilidade e usabilidade.",

    funcionalidades: [
      "Interface completa para gerenciamento de pedidos",
      "Integração com API REST",
      "CRUD completo de comandas",
      "Dashboard operacional",
      "Filtros e organização avançada",
      "Fluxo completo de atendimento",
    ],

    linkGithub: "https://github.com/Ghabriel-Silva/easyFood-web",
  },


  {
    imgCard: [
      "geracvMain",
      "geracv1",
      "geracv2",
      "geracv3",
      "geracv4",
      "geracv5",
      "geracv6",
      "geracv7",
      "geracv9",
      "geracv9",
    ],

    titleDescription: "Gerador de Currículos",
    textDescription: "UI / Website",
    iconDescriptionText: "Ver Projeto",

    iconDescriptionTechnologies: [
      "figma",
      "notion",
      "css",
      "Html",
      "js",
      "react",
    ],

    textDialog:
      "Ferramenta desenvolvida para facilitar a criação de currículos de forma rápida e acessível. O usuário pode preencher apenas as informações desejadas e gerar um PDF pronto para envio.",

    funcionalidades: [
      "Geração automática de currículo em PDF",
      "Campos opcionais",
      "Interface simples e intuitiva",
      "Rápida criação de currículo",
      "Foco em acessibilidade para iniciantes",
    ],

    linkGithub: "https://github.com/Ghabriel-Silva/gerador-cv",
    linkProjeto: "https://ghabriel-silva.github.io/gerador-cv/",
  },

  {
    imgCard: [
      "comandas1",
      "comandas2",
      "comandas3",
      "comandas4",
      "comandas5",
      "comandas6",
      "comandas7",
      "comandas8",
      "comandas9",
      "comandas10",
      "comandas11",
      "comandas12",
    ],

    titleDescription: "Gerenciador de Comandas",
    textDescription: "Sistema Web",
    iconDescriptionText: "Ver Projeto",

    iconDescriptionTechnologies: [
      "js",
      "nodeJs",
      "handlebars",
      "Html",
      "mysql",
    ],

    textDialog:
      "Sistema criado para substituir comandas manuais em estabelecimentos de alimentação. Organiza pedidos, reduz erros e agiliza o atendimento, proporcionando maior controle operacional.",

    funcionalidades: [
      "Gerenciamento completo de pedidos",
      "Redução de erros manuais",
      "Organização do fluxo de atendimento",
      "Controle de mesas e comandas",
      "Maior eficiência operacional",
    ],

    linkGithub: "https://github.com/Ghabriel-Silva/EasyFood",
    linkProjeto: "https://ghabriel-silva.github.io/EasyFood/",
  },

]
