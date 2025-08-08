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
        chave: "1",
        imgIcon: "config",
        title: "Ux designer",
        text: "Pesquisa e criação de experiências focadas no usuário, alinhando usabilidade, funcionalidade e soluções estratégicas.",
    },
    {
        chave: "2",
        imgIcon: "tag",
        title: "Desenvolvimento",
        text: "Codificação de interfaces usando tecnologias modernas, como JS, React,  com foco em responsividade e desempenho.",
    }, 
     {
        chave: "3",
        imgIcon: "tela",
        title: "UI Design",
        text: "Desenvolvimento de interfaces visuais atrativas e intuitivas, garantindo identidade da marca e fácil navegação.",
    }, 
     {
        chave: "4",
        imgIcon: "caneta",
        title: "Web Designer",
        text: "Criação de sites responsivos com design atraente, usabilidade e performance otimizada.",
        imagem:"fundo"
    }
] 