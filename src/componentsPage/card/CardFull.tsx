//Importação chakra ui
import { Flex, Stack, Tag, Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import { useState } from "react"
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
    defaultText?: string

}

function CardFull({ imgCard, iconDescriptionTechnologies, titleDescription, textDescription, defaultText = "Projeto" }: Props) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}  placement={"center"}>
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
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Dialog Title</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>

                            </Dialog.Body>
                            <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </Dialog.ActionTrigger>
                                <Button>Save</Button>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </>

    )
}

export default CardFull