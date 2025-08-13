//Importando type imae bg
import type  {imageBg} from "@/componentsPage/blogCard/ImgContain"

//Importando interfase avatar
import type { AvatarProps } from "@/componentsPage/shared/Avatar"

//importando imagem do avatar
import ImageAvatarUser from "@/assets/my-notion-face-transparent-white.png"

export interface dataBlogs extends AvatarProps  {
    imageBlogCard: imageBg
    titleBlogCard:string
    subtitleBlogCard:string
    descriptionBlogCard:string
}


export const cardBlogsData: dataBlogs[] = [
    {
        imageBlogCard:"coffee", 
        titleBlogCard:"Se você não toma café, você não é Dev! Descubra a verdade de uma vez por toda.",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Você já escutou aquela frase quem não toma café não é dev,  nesse post vamos abordar esse assunto e entender  se isso é verdade. ",
        name:"Gabriel Silva",
        description:"25 Janeiro de 2025  4 MIN LEITURA",
        image:ImageAvatarUser


    },
    {
        imageBlogCard:"linguagem", 
        titleBlogCard:"Qual Linguagem de Programação Escolher em 2025? ",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Saiba quais linguagens de programação estarão em alta em 2025 e descubra qual é a melhor escolha para impulsionar sua carreira no mundo da tecnologia",
        name:"Gabriel Silva",
        description:"01 agosto  de 2024  07 MIN LEITURA",
        image:ImageAvatarUser
    },
    {
        imageBlogCard:"DevJava", 
        titleBlogCard:"Porque todo desenvolvedor Java é calvo? Descubra nesse poste!",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Brincadeira ou verdade? Entenda por que Java virou sinônimo de calvície entre desenvolvedores neste post divertido e revelador!",
        name:"Gabriel Silva",
        description:"12 de julho  de 2025  6 MIN LEITURA",
        image:ImageAvatarUser
    },
    {
        imageBlogCard:"linkedin", 
        titleBlogCard:"Seu perfil diz uma coisa, seu código diz outra!",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Você já viu dev que no perfil parece sênior, mas na prática não entrega? Nesse post vamos falar sobre essa farsa silenciosa do mundo dev.",
        name:"Gabriel Silva",
        description:"01 agosto  de 2024  07 MIN LEITURA",
        image:ImageAvatarUser
    },
    
]