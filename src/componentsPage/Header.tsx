//componentes 
import AvatarUser from "@/componentsPage/shared/Avatar"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Stack, HStack, Link, useMediaQuery, Icon, CloseButton, Drawer, Portal, Text, useToken } from "@chakra-ui/react"




//Color mode 
import { ColorModeButton } from "@/components/ui/color-mode"

//Image
import imgAvatar from "@/assets/my-notion-face-transparent-white.png"


import { Flex } from "@chakra-ui/react"


function Header() {
    //definindo o tamanho do header
    const HEADER_HEIGHT = "72px";
    //definindo o variação do bg para o efetio de vidro
    const [bgColor] = useToken("colors", ["bg"]);

    //Definindo uma query para o mobile
    const [isMobile] = useMediaQuery(["(max-width: 650px)"]);

    //Estado para o drawer 
     const [drawer, SetDrawer] = useState<boolean>(false)

     

    const linkBaseStyle = {
        textStyle: "sm",
        fontWeight: "normal",
        display: "inline-block",
        textDecoration: "none",
        listStyleType: "none",
        _focus: { boxShadow: "none", outline: "none" },
        _hover: { color: "purple.500" },
        _active: { color: "purple.700" },
    };


    const navLinks = (
        <Stack

            direction={isMobile ? "column" : "row"}
            gap={isMobile ? 12 : 9}
            mt={isMobile ? 8 : 0}
            textAlign={isMobile ? "center" : "center"}
        >
            <Link {...linkBaseStyle} href="#home"> Home</Link>
            <Link {...linkBaseStyle} href="#projetos">Projetos</Link>
            <Link {...linkBaseStyle} href="#skills">Skills</Link>
            <Link {...linkBaseStyle} href="#">Blog</Link>
            <Link {...linkBaseStyle} href="#">Contato</Link>
        </Stack>

    )
    return (
        <Flex
            justify="space-between"
            align="center"
            position="fixed"
            top="0"
            left="0"
            width="100%"
            zIndex="1000"
            bg={`${bgColor}B3`} 
            backdropFilter="saturate(180%) blur(9px)"
            px={6}
            py={4}
            h={HEADER_HEIGHT}

        >
            <AvatarUser description="PORTFÓLIO 2025" image={imgAvatar} name="Gabriel silva" />
            {isMobile ? (
                <HStack>
                    <ColorModeButton />
                    <Drawer.Root >
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
                                        <CloseButton size="lg" />
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