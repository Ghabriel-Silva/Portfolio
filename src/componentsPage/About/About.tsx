"use client"

import { Box, Stack, Image, Marquee, Container, Text, Heading, Badge, Wrap } from "@chakra-ui/react"

import image1 from "@/assets/imgAbout/1.jpeg"
import image3 from "@/assets/imgAbout/3.jpeg"
import image4 from "@/assets/imgAbout/4.jpeg"
import image5 from "@/assets/imgAbout/5.jpeg"
import image6 from "@/assets/imgAbout/6.jpeg"
import image7 from "@/assets/imgAbout/7.jpeg"
import image8 from "@/assets/imgAbout/8.jpeg"
import image9 from "@/assets/imgAbout/9.jpeg"

export const About = () => {
    const techStack = [
        "Node.js", "TypeScript", "React", "Next.js", "Express", "MySQL",
        "Redis", "TypeORM", "Chakra UI", "React Query", "JWT (RBAC)", "Git", "Figma"
    ];

    return (
        <Container maxW="container.xl" mt="120px" mb="80px">
            <Stack
                direction={{ base: "column", lg: "row" }}
                gap={{ base: "12", lg: "20" }}
                align="flex-start" // Texto agora começa do topo
                justify="space-between"
            >
                {/* LADO ESQUERDO: Conteúdo Matador */}
                <Box flex="1.2" textAlign="left">
                    <Heading size={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb="6" >
                        Sobre.
                    </Heading>

                    <Stack gap="4" color="gray.600" fontSize="md" lineHeight="tall">
                        <Text>
                            Me chamo Gabriel, tenho 24 anos e desde 2023 estou em transição para a área de desenvolvimento de software. Atualmente curso Engenharia de Software e trabalho com o ecossistema JavaScript, utilizando tecnologias como TypeScript, Node.js, React e bancos de dados SQL.
                        </Text>

                        <Text>
                            Hoje desenvolvo projetos completos, além de implementar integrações e melhorias em sistemas existentes. Tenho experiência prática na construção de aplicações e busco atuar como desenvolvedor Full Stack, Back-end ou Front-end.
                        </Text>

                        <Text>
                            Procuro oportunidades onde eu possa aplicar meus conhecimentos em projetos reais, evoluir profissionalmente e contribuir com soluções eficientes e bem estruturadas.
                        </Text>
                        <Text fontSize="sm" fontStyle="italic" color="gray.500" borderTop="1px solid" borderColor="gray.100" pt="4">
                            Nas horas livres, gosto de desconectar saindo com minha esposa e passeando com meu cachorro. 🐾
                        </Text>

                        <Box py="4">
                            <Text fontWeight="bold" mb="3" color="gray.700">Principais tecnologias:</Text>
                            <Wrap gap="2">
                                {techStack.map((tech) => (
                                    <Badge key={tech} variant="subtle" colorScheme="blue" px="2" py="1" rounded="md">
                                        {tech}
                                    </Badge>
                                ))}
                            </Wrap>
                        </Box>


                    </Stack>
                </Box>

                {/* LADO DIREITO: Marquee Visual */}
                <Box
                    flex="0.8"
                    height="600px"
                    overflow="hidden"
                    perspective="1200px"
                    width="100%"
                    position="relative"
                    display={{ base: "none", md: "block" }} // Oculta em telas muito pequenas para focar no texto
                >
                    <Stack
                        direction="row"
                        gap="4"
                        height="800px"
                        transform="rotateX(15deg) rotateY(-15deg) rotateZ(5deg)"
                        transformOrigin="center center"
                        opacity="0.8"
                    >
                        <Marquee.Root side="top" flex="1" autoFill>
                            <Marquee.Viewport>
                                <Marquee.Content>
                                    <MarqueeItems images={imagesColumn1} />
                                </Marquee.Content>
                            </Marquee.Viewport>
                        </Marquee.Root>

                        <Marquee.Root side="bottom" flex="1" autoFill>
                            <Marquee.Viewport>
                                <Marquee.Content>
                                    <MarqueeItems images={imagesColumn2} />
                                </Marquee.Content>
                            </Marquee.Viewport>
                        </Marquee.Root>
                    </Stack>

                    {/* Gradientes para "sumir" com as bordas do card e dar profundidade */}
                    <Box
                        position="absolute"
                        inset="0"
                        pointerEvents="none"
                        bgGradient="linear(to-b, background 0%, transparent 20%, transparent 80%, background 100%)"
                    />
                </Box>
            </Stack>
        </Container>
    )
}

const MarqueeItems = (props: { images: string[] }) => (
    <>
        {props.images.map((src, i) => (
            <Marquee.Item key={i} py="3">
                <Image
                    src={src}
                    alt={`Project screenshot ${i}`}
                    width="full"
                    height="220px"
                    objectFit="cover"
                    rounded="xl"
                    shadow="2xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                />
            </Marquee.Item>
        ))}
    </>
)

const imagesColumn1 = [
    image1,
    image4,
    image5,
    image3,

]

const imagesColumn2 = [
    image8, 
    image9,
    image6,
    image7
]