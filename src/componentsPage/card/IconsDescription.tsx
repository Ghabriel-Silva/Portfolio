import {Stack, Tag, HStack, Image } from "@chakra-ui/react"



import iconBehance from "@/assets/iconsCards/IconBehance.png";
import iconCanva from "@/assets/iconsCards/IconCanvaa.png";
import iconGit from "@/assets/iconsCards/IconGitHub.png";
import iconPhotoshop from "@/assets/iconsCards/Iconadobe_photoshop.png";
import iconCSS from "@/assets/iconsCards/Iconcss_3.png";
import iconFigma from "@/assets/iconsCards/Iconfigma.png";
import iconHTML from "@/assets/iconsCards/Iconhtml_5.png";
import iconJS from "@/assets/iconsCards/Iconjs.png";
import iconNotion from "@/assets/iconsCards/Iconnotion.png";
import iconReact from "@/assets/iconsCards/Iconreact.png";
import iconVSCode from "@/assets/iconsCards/Iconvs_code.png";
import iconNodeJs from "@/assets/iconsCards/nodejs.png";

const technologiesCatalog = {
    behance: { src: iconBehance, alt: "Behance" },
    canva: { src: iconCanva, alt: "Canva" },
    github: { src: iconGit, alt: "GitHub" },
    photoshop: { src: iconPhotoshop, alt: "Photoshop" },
    css: { src: iconCSS, alt: "CSS3" },
    figma: { src: iconFigma, alt: "Figma" },
    Html: { src: iconHTML, alt: "HTML5" },
    js: { src: iconJS, alt: "JavaScript" },
    notion: { src: iconNotion, alt: "Notion" },
    react: { src: iconReact, alt: "React" },
    vscodee: { src: iconVSCode, alt: "VS Code" },
    nodeJs: { src: iconNodeJs, alt: "Node js" },
} as const 

export type TechnologyKey = keyof typeof technologiesCatalog;  // "Crie um tipo com as chaves do objeto technologiesCatalog."
//type TechnologyKey = "html" | "css" | "js";

interface CardProps {
    defaultText?: string
    technologies?:TechnologyKey[]
}

function IconsDescription({ defaultText = "Projeto", technologies }: CardProps) {

    return (
        <Stack  gap="1">
            {technologies && technologies.length > 0 && (
            <HStack gap="2" flexWrap="wrap"  >
                {technologies.map((techKey)=>{
                    const tech = technologiesCatalog[techKey]
                    return(
                        <Image
                            key={techKey}
                            src={tech.src}
                            alt={tech.alt}
                            boxSize="16px"
                        >
                            
                        </Image>
                    )
                })}
            </HStack>
            )}
            <Tag.Root bg="purple.emphasized" color="white" size="lg" variant="solid" w="fit-content">
                <Tag.Label>{defaultText} </Tag.Label>
            </Tag.Root>
        </Stack>
    )
}

export default IconsDescription