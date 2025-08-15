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
    linkBlogs:string
}


export const cardBlogsData: dataBlogs[] = [
    {
        imageBlogCard:"coffee", 
        titleBlogCard:"Se você não toma café, você não é Dev! Descubra a verdade de uma vez por toda.",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Você já escutou aquela frase quem não toma café não é dev,  nesse post vamos abordar esse assunto e entender  se isso é verdade. ",
        name:"Gabriel Silva",
        description:"25 Janeiro de 2025  4 MIN LEITURA",
        image:ImageAvatarUser, 
        linkBlogs:"https://emerald-haddock-389.notion.site/Se-voc-n-o-toma-caf-voc-n-o-Dev-Descubra-a-verdade-de-uma-vez-por-toda-1533f4b3611b8077acecd1a0430cc58f"
    },
    {
        imageBlogCard:"linguagem", 
        titleBlogCard:"Qual Linguagem de Programação Escolher em 2025? ",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Saiba quais linguagens de programação estarão em alta em 2025 e descubra qual é a melhor escolha para impulsionar sua carreira no mundo da tecnologia",
        name:"Gabriel Silva",
        description:"01 FEVEREIRO  de 2025  07 MIN LEITURA",
        image:ImageAvatarUser, 
        linkBlogs:"https://emerald-haddock-389.notion.site/Qual-Linguagem-de-Programa-o-Escolher-em-2025-Descubra-a-Melhor-Op-o-para-Sua-Carreira-1533f4b3611b805dab3fd6850ee31da7"
        
    },
    {
        imageBlogCard:"DevJava", 
        titleBlogCard:"Porque todo desenvolvedor Java é calvo? Descubra nesse poste!",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Brincadeira ou verdade? Entenda por que Java virou sinônimo de calvície entre desenvolvedores neste post divertido e revelador!",
        name:"Gabriel Silva",
        description:"11 DE JANEIRO de 2025  3 MIN LEITURA",
        image:ImageAvatarUser, 
        linkBlogs:"https://emerald-haddock-389.notion.site/Porque-todo-desenvolvedor-Java-calvo-Descubra-nesse-poste-23e3f4b3611b800fb44bd19d9fe926b9"
    },
    {
        imageBlogCard:"linkedin", 
        titleBlogCard:"Seu perfil diz uma coisa, seu código diz outra!",
        subtitleBlogCard:"Desenvolvimento",
        descriptionBlogCard:"Você já viu dev que no perfil parece sênior, mas na prática não entrega? Nesse post vamos falar sobre essa farsa silenciosa do mundo dev.",
        name:"Gabriel Silva",
        description:"28 DE JULHO  de 2025  05 MIN LEITURA",
        image:ImageAvatarUser, 
        linkBlogs:"https://emerald-haddock-389.notion.site/Seu-perfil-diz-uma-coisa-seu-c-digo-diz-outra-farsa-silenciosa-do-mundo-dev-23e3f4b3611b80a3929bc678ae917bd0"
    },
    
]