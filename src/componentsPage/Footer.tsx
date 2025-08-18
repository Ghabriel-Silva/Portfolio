import { HStack, Text, Link } from "@chakra-ui/react"

function Footer() {
    return (
        <HStack
            mt="60px"
            as="footer"
            bg="gray.subtle"
            w="100%"
            p={4}
            justify="center"
        >
            <HStack
                w="1536px"
                justify={{ base: "center", md: "space-between" }}
                mx={{ base: "16px", md: "32px", lg: "144px" }}
                wrap="wrap"
                align="center"
                gap={4} 
            >
                <Text textAlign="center" textStyle="sm" w={{ base: "100%", md: "auto" }}>
                    © {new Date().getFullYear()} Gabriel Silva - Todos os direitos reservados
                </Text>

                <HStack
                    gap={6}
                    textAlign="center"
                    justify="center"
                    w={{ base: "100%", md: "auto" }}
                    wrap="wrap"
                >
                    <Link textStyle="sm" href="https://github.com/Ghabriel-Silva" target="_blanck">Git Hub</Link>
                    <Link textStyle="sm" href="https://www.linkedin.com/in/ghaabriieel/" target="_blanck">Linkedin</Link>
                    <Link textStyle="sm" href="mailto:ghaabriieel@gmail.com?subject=Contato do Portfólio&body=Olá Gabriel, quero saber mais sobre...">Email</Link>
                </HStack>
            </HStack>
        </HStack>
    )
}

export default Footer
