import {Stack,  HStack, Image } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"


//Importação de imagems

import iconCSS from "@/assets/iconsCards/Iconcss_3.png";
import iconFigma from "@/assets/iconsCards/Iconfigma.png";
import iconHTML from "@/assets/iconsCards/Iconhtml_5.png";
import iconJS from "@/assets/iconsCards/Iconjs.png";
import iconNotion from "@/assets/iconsCards/Iconnotion.png";
import iconReact from "@/assets/iconsCards/Iconreact.png";
import iconNodeJs from "@/assets/iconsCards/nodejs.png";
import iconHandlebars from "@/assets/iconsCards/handlebars.png";
import iconMysql from "@/assets/iconsCards/Mysql_logo.png";
import iconTypescript from "@/assets/iconsCards/typescript.png";
import iconTypeOrm from "@/assets/iconsCards/typeorm-icon-colored.png";
import iconChakraUi from "@/assets/iconsCards/chakra.png";

const technologiesCatalog = {
    css: { src: iconCSS, alt: "CSS3" },
    figma: { src: iconFigma, alt: "Figma" },
    Html: { src: iconHTML, alt: "HTML5" },
    js: { src: iconJS, alt: "JavaScript" },
    notion: { src: iconNotion, alt: "Notion" },
    react: { src: iconReact, alt: "React" },
    nodeJs: { src: iconNodeJs, alt: "Node js" },
    handlebars: { src: iconHandlebars, alt: "Handlebars" },
    mysql: { src: iconMysql, alt: " My sql" },
    typescript: { src: iconTypescript, alt: "Typescript" },
    typeOrm: { src: iconTypeOrm, alt: "TypeOrm" },
    chakraUi: { src: iconChakraUi, alt: "Chakra UI" },

} as const 

export type TechnologyKey = keyof typeof technologiesCatalog;  // "Crie um tipo com as chaves do objeto technologiesCatalog."
//type TechnologyKey = "html" | "css" | "js";

interface CardProps {
    technologies?:TechnologyKey[]
}

function IconsDescription({ technologies }: CardProps) {

    return (
        <Stack  gap="1">
            {technologies && technologies.length > 0 && (
            <HStack gap="2" flexWrap="wrap" cursor={"pointer"} >
                {technologies.map((techKey, index)=>{
                    const tech = technologiesCatalog[techKey]
                    return(
                        < Tooltip key={index} content={tech.alt} >
                            <Image
                                src={tech.src}
                                alt={tech.alt}
                                boxSize="18px"
                            >
                            
                            </Image>
                        </ Tooltip>
                    )
                })}
            </HStack>
            )}
        </Stack>
    )
}

export default IconsDescription