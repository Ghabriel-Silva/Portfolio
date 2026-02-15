//Importação imagens icones

import tag from "@/assets/imgHabilidades/tag.png"
import caneta from "@/assets/imgHabilidades/caneta.png"
import tela from "@/assets/imgHabilidades/Tela.png"
import config from "@/assets/imgHabilidades/confingurações.png"
import fundo from "@/assets/imgHabilidades/fundo.png"
import tecnologia from "@/assets/imgHabilidades/tecnologia.png"

export const imagesSkills = {
    tag: { src: tag, alt: "icone de tag html" },
    caneta: { src: caneta, alt: "icone de caneta" },
    tela: { src: tela, alt: "icone de tela" },
    config: { src: config, alt: "icone de configuração " },
    fundo: { src: fundo, alt: "icone de fundo" },
    tecnologia: { src: tecnologia, alt: "icone de tecnologia" },
} as const

export type allImageSkills = keyof typeof imagesSkills


interface SkillsProps {
    chave: string
    imgIcon: allImageSkills
    text: string
    title: string
    imagem?: allImageSkills
}

export const skills: SkillsProps[] = [
    {
        chave: "01",
        imgIcon: "config",
        title: "Front-end Expert",
        text: "Desenvolvimento SPA e SSR com React, Next.js e TypeScript. Experiência em UI robusta (Chakra UI/Bootstrap), gestão de estado e cache com TanStack Query e validações complexas com Yup.",
    },
    {
        chave: "02",
        imgIcon: "tag",
        title: "Back-end & Architecture",
        text: "APIs escaláveis em Node.js e Express com TypeScript. Domínio em TypeORM, MySQL, autenticação JWT, cache com Redis e arquitetura focada em segurança e performance.",
    },
    {
        chave: "03",
        imgIcon: "tela",
        title: "UI Design & Systems",
        text: "Criação de interfaces sólidas no Figma utilizando Design Systems, Design Tokens e variáveis para garantir consistência visual e agilidade no handoff para o desenvolvimento.",

    },
    {
        chave: "04",
        imgIcon: "caneta",
        title: "DevOps & Git Flow",
        text: "Gestão profissional de código via GitHub, seguindo rigorosamente padrões de GitFlow e Conventional Commits para manter um histórico limpo e versionamento semântico.",
        imagem: "fundo"
    }
]