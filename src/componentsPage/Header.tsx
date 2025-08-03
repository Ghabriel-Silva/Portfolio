//componentes 
import AvatarUser from "@/componentsPage/shared/Avatar"
import { RxHamburgerMenu } from "react-icons/rx";
import {Stack, HStack, Link, useMediaQuery, Icon, CloseButton, Drawer, Portal, Text } from "@chakra-ui/react"

//Color mode 
import { ColorModeButton } from "@/components/ui/color-mode"

//Image
import imgAvatar from "@/assets/my-notion-face-transparent-white.png"


import { Flex } from "@chakra-ui/react"

type Props = {}

function Header({ }: Props) {

    const [isMobile] = useMediaQuery(["(max-width: 650px)"]);

    const navLinks = (
    <Stack
        direction={isMobile? "column" : "row"}
        gap={9}
    >
        <Link textStyle="sm" fontWeight="normal" href="#">Home</Link>
        <Link textStyle="sm" fontWeight="normal" href="#">Projetos</Link>
        <Link textStyle="sm" fontWeight="normal" href="#">Skills</Link>
        <Link textStyle="sm" fontWeight="normal" href="#">Blog</Link>
        <Link textStyle="sm" fontWeight="normal" href="#">Contato</Link>
    </Stack>
)
    return (
        <Flex
            justify="space-between"
            align='center'
        >
            <AvatarUser description="PORTFÓLIO 2025" image={imgAvatar} name="Gabriel silva" />
            {isMobile ? (
                <HStack>
                    <ColorModeButton />
                    <Drawer.Root>
                        <Drawer.Trigger asChild>
                            <Icon size="md">
                                <RxHamburgerMenu />
                            </Icon>
                        </Drawer.Trigger>
                        <Portal>
                            <Drawer.Backdrop />
                            <Drawer.Positioner>
                                <Drawer.Content>
                                    <Drawer.Header>
                                        <Drawer.Title>Menu</Drawer.Title>
                                    </Drawer.Header>
                                    <Drawer.Body>
                                        {navLinks}
                                    </Drawer.Body>
                                    <Drawer.Footer>
                                        <Text fontSize="sm" color="gray.500">
                                            Versão 1.0 • Portfólio Gabriel Silva
                                        </Text>
                                    </Drawer.Footer>
                                    <Drawer.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Drawer.CloseTrigger>
                                </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>

                </HStack>

            ) : (
                <HStack gap={12}>
                    {navLinks}
                    <ColorModeButton />
                </HStack>
            )}
        </Flex>
    )
}

export default Header