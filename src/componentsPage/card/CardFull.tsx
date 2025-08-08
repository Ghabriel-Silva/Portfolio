//Importação chakra ui
import { Flex, Stack } from "@chakra-ui/react"

//Importação de componentes
import TitleDescriptionCard from "@/componentsPage/card/TitleDescriptionCard"
import IconsDescription from "@/componentsPage/card/IconsDescription"
import ImgContain from "@/componentsPage/card/imgContain"

//Importação do Tipo literal 
import type { TechnologyKey } from "@/componentsPage/card/IconsDescription"
import type { imageProjetos } from "@/componentsPage/card/imgContain"

interface Props {
    imgCard: imageProjetos[]
    iconDescriptionText: string
    iconDescriptionTechnologies: TechnologyKey[]
    titleDescription: string
    textDescription: string

}

function CardFull({ imgCard, iconDescriptionText, iconDescriptionTechnologies, titleDescription, textDescription }: Props) {
    return (
        <Flex bg="bg.muted" direction="column" minW={{ base: "220px", md: "290px" }} flex="1" borderRadius="lg" shadow="sm" transition="all 0.3s ease"
            _hover={{
                transform: "translateY(-4px) rotate(-0.5deg)",
                boxShadow: "xl",
            }}   >
            <ImgContain imagem={imgCard} />
            <Stack gap="2" p="4" borderBottomRadius="lg" >
                <IconsDescription defaultText={iconDescriptionText} technologies={iconDescriptionTechnologies} />
                <TitleDescriptionCard title={titleDescription} text={textDescription} />
            </Stack>
        </Flex>
    )
}

export default CardFull