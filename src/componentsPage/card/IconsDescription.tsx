import { Box, Tag,  HStack , Image } from "@chakra-ui/react"
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




interface Props {
    defaultText?: string
    hoverText?: string
}

const icons = [
  { src: iconBehance, alt: "Behance" },
  { src: iconCanva, alt: "Canva" },
  { src: iconGit, alt: "GitHub" },
  { src: iconPhotoshop, alt: "Photoshop" },
  { src: iconCSS, alt: "CSS3" },
  { src: iconFigma, alt: "Figma" },
  { src: iconHTML, alt: "HTML5" },
  { src: iconJS, alt: "JavaScript" },
  { src: iconNotion, alt: "Notion" },
  { src: iconReact, alt: "React" },
  { src: iconVSCode, alt: "VS Code" },
  { src: iconNodeJs, alt: "Node js" },
];

function IconsDescription({ defaultText = "Projeto", hoverText = "Ver Projeto" }: Props) {

    return (
        <Box>
            <HStack gap={4} flexWrap="wrap">
                 {icons.map((icon, index)=>(
                    <Image
                        key={index}              
                        src={icon.src}
                        alt={`icone ${icon.alt}`}
                        boxSize="20px"
                        
                    ></Image>
                 ))}
            </HStack>
            <Tag.Root bg="purple.emphasized" color="white" size="lg" variant="solid">
                <Tag.Label>{defaultText} </Tag.Label>
            </Tag.Root>
        </Box>
    )
}

export default IconsDescription