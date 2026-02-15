//Importação chakra ui
import { Flex, Stack, Tag, Button, CloseButton, Dialog, Portal, Text, Icon, Link } from "@chakra-ui/react"
import { useState } from "react"
//Importação de componentes
import TitleDescriptionCard from "@/componentsPage/card/TitleDescriptionCard"
import IconsDescription from "@/componentsPage/card/IconsDescription"
import ImgContain from "@/componentsPage/card/imgContain"


//importação de icones 
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";


//Importação do Tipo literal 
import type { TechnologyKey } from "@/componentsPage/card/IconsDescription"
import type { imageProjetos } from "@/componentsPage/card/imageCardsIndex"

interface Props {
    imgCard: imageProjetos[]
    iconDescriptionText: string
    iconDescriptionTechnologies: TechnologyKey[]
    titleDescription: string
    textDescription: string
    textDialog: string
    funcionalidades: string[]
    linkGithub?: string
    linkProjeto?: string
    defaultText?: string

}

function CardFull({ imgCard, iconDescriptionTechnologies, titleDescription, textDescription, textDialog, funcionalidades, linkGithub, linkProjeto, defaultText = "Projeto" }: Props) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)} placement={"center"} >
                <Dialog.Trigger asChild>
                    <Flex bg="bg.muted" direction="column" minW={{ base: "220px", md: "290px" }} flex="1" borderRadius="lg" shadow="sm" transition="all 0.3s ease"
                        _hover={{
                            transform: "translateY(-4px) rotate(-0.5deg)",
                            boxShadow: "xl",
                        }}
                        _active={{
                            transform: "translateY(-4px) rotate(-0.5deg)",
                            boxShadow: "xl",
                        }}
                    >
                        <ImgContain imagem={imgCard} />
                        <Tag.Root bg="purple.emphasized" color="white" size="lg" variant="solid" w="fit-content" borderBottomRadius={"md"} borderTopRadius="none" >
                            <Tag.Label>{defaultText} </Tag.Label>
                        </Tag.Root>
                        <Stack gap="2" p="4" borderBottomRadius="lg" >
                            <TitleDescriptionCard title={titleDescription} text={textDescription} />
                            <IconsDescription technologies={iconDescriptionTechnologies} />
                        </Stack>
                    </Flex>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content
                            maxW="800px"
                            borderRadius="2xl"
                        >
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                            <Dialog.Header>
                                <Dialog.Title >
                                    <Text textStyle="2xl">{titleDescription}</Text>
                                </Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body px={6} py={6}>
                                <ImgContain imagem={imgCard} />
                                <Stack gap="3" pt={6}>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Descrição do Projeto
                                    </Text>
                                    <Text>
                                        {textDialog}
                                    </Text>
                                </Stack>
                                <Stack gap="3" mt={6}>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Tecnologias Utilizadas
                                    </Text>
                                    <IconsDescription technologies={iconDescriptionTechnologies} />
                                </Stack>
                                <Stack gap="3" mt={6}>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Funcionalidades
                                    </Text>
                                    <Stack as="ul" pl={5} gap={1} listStyleType="disc">
                                        {funcionalidades.map((item, index) => (
                                            <Text as="li" key={index}>
                                                {item}
                                            </Text>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Dialog.Body>

                            <Dialog.Footer
                                gap="3"
                                px={6}
                                py={4}
                                borderTop="1px solid"
                                borderColor="gray.200"
                            >
                                {linkGithub && (
                                    <Link href={linkGithub} target="_blank">
                                        <Button
                                            variant="outline"
                                            size="md"
                                            _hover={{
                                                transform: "translateY(-2px)",
                                                boxShadow: "lg",
                                                bg: "purple.700",
                                                color: "white",
                                            }}
                                            transition="all 0.2s ease"
                                        >
                                            <Icon size="lg" color="purple.500">
                                                <FaGithub />
                                            </Icon>
                                            Código
                                        </Button>
                                    </Link>
                                )}

                                {linkProjeto && (
                                    <Link href={linkProjeto} target="_blank">
                                        <Button
                                            variant="outline"
                                            size="md"
                                            _hover={{
                                                transform: "translateY(-2px)",
                                                boxShadow: "lg",
                                                bg: "purple.700",
                                                color: "white",
                                            }}
                                            transition="all 0.2s ease"
                                        >
                                            <Icon size="lg" color="purple.500">
                                                <FiExternalLink />
                                            </Icon>
                                            Ver Projeto
                                        </Button>
                                    </Link>
                                )}
                            </Dialog.Footer>


                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </>

    )
}

export default CardFull