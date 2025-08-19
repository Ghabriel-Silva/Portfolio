//componentes 
import AvatarUser from "@/componentsPage/shared/Avatar"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi"
import { Stack, HStack, Link, useMediaQuery, Icon, CloseButton, Drawer, Portal, Text, useToken, Menu } from "@chakra-ui/react"





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

    // Estado para o drawer 
    const [open, setOpen] = useState(false)

    //Estado para mudança de open to closet
    function handleToCloset(): void {
        setOpen(false)

    }


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
            textAlign={isMobile ? "start" : "center"}
        >
            <Link {...linkBaseStyle} onClick={handleToCloset} href="#home"> Home</Link>
            <Link {...linkBaseStyle} onClick={handleToCloset} href="#projetos">Projetos</Link>

            <Menu.Root >
                <Menu.Trigger asChild>
                    <HStack  cursor="pointer" border="none"  >
                        <Text {...linkBaseStyle}>Skills</Text>
                        <FiChevronDown  />
                    </HStack>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content zIndex={1400}>
                            <Menu.Item value="new-txt"> <Link {...linkBaseStyle} onClick={handleToCloset} href="#habilidades">Habilidades</Link></Menu.Item>
                            <Menu.Item value="new-txt"> <Link {...linkBaseStyle} onClick={handleToCloset} href="#insights">Insights</Link></Menu.Item>
                            <Menu.Item value="new-txt"> <Link {...linkBaseStyle} onClick={handleToCloset} href="#acordeao">Perguntas e Respostas</Link></Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
            <Link {...linkBaseStyle} onClick={handleToCloset} href="#cardsblogs">Blog</Link>
            <Link {...linkBaseStyle} onClick={handleToCloset} href="#contato">Contato</Link>
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
            px={{ base: "16px", md: "32px", lg: "144px" }}
            py={4}
            h={HEADER_HEIGHT}

        >
            <AvatarUser description="PORTFÓLIO 2025" image={imgAvatar} name="Gabriel silva" />
            {isMobile ? (
                <HStack>
                    <ColorModeButton />
                    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}   >
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
                                            Versão 1.0 • Portfólio Gabriel Silva/ Utilma atualização 19/08/2025
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