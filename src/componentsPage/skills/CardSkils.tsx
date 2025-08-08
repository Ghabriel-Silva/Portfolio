import { Stack, HStack, Text, Image, Heading, Box } from "@chakra-ui/react"
import type { allImageSkills } from "@/componentsPage/skills/SkillsData"

import { imagesSkills } from "@/componentsPage/skills/SkillsData"



interface PropsSkils {
    chave: string
    title: string
    text: string
    imgIcon: allImageSkills
    imagem?: allImageSkills

}

function CardSkils({ chave, imgIcon, text, title, imagem }: PropsSkils) {
    return (
        <Stack bg="bg.muted" direction="column" minW={{ base: "270px", md: "290px" }} flex="1" borderRadius="xl" p="7" >
            <HStack position="relative">
                <Text fontWeight="normal" letterSpacing="tight" lineHeight="1" fontSize="9xl" h="auto" mt="-4px">{chave}</Text>
                <Image
                    position="absolute"
                    top="5px"
                    right="0px"
                    src={imagesSkills[imgIcon].src}
                    alt={imagesSkills[imgIcon].alt}
                />
            </HStack>
            <Stack gap="5" paddingBottom={5} alignSelf="stretch">
                <Heading color="purple.solid" fontSize="2xl" fontStyle="normal" fontWeight="bold">{title}</Heading>
                <Text color="gray.fg" fontStyle="normal" >{text}</Text>
            </Stack  >
            {imagem && (<Box >
                <Image
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center"
                    loading="lazy"
                    src={imagesSkills[imagem].src}
                    alt={imagesSkills[imagem].alt}
                />
            </Box>)}

        </Stack>
    )
}

export default CardSkils