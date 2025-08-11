//Importação imagens icones

import tag from "@/assets/imgHabilidades/tag.png"
import caneta from "@/assets/imgHabilidades/caneta.png"
import tela from "@/assets/imgHabilidades/Tela.png"
import config from "@/assets/imgHabilidades/confingurações.png"
import fundo from "@/assets/imgHabilidades/fundo.png"
import tecnologia from "@/assets/imgHabilidades/tecnologia.png"

export const imagesSkills = {
    tag: { src: tag , alt: "icone de tag html" },
    caneta: { src: caneta , alt: "icone de caneta" },
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
        title: "Front-end",
        text: "Criação de interfaces  utilizando Figma, HTML, CSS, JavaScript e TypeScript, React.",
    },
    {
        chave: "02",
        imgIcon: "tag",
        title: "Back-end",
        text: "Implementação de APIs e serviços usando Node.js, Express e bancos de dados, integrando com front-end.",
    }, 
     {
        chave: "03",
        imgIcon: "tela",
        title: "UI/UX Design",
        text: "Desenvolvimento de interfaces no Figma, criação de design systems e protótipos visuais consistentes.",
       
    }, 
     {
        chave: "04",
        imgIcon: "caneta",
        title: "Controle de Versão",
        text: "Gerenciamento de código com Git e GitHub, utilizando branches, pull requests e versionamento semântico.",
        imagem:"fundo"
    }
] 