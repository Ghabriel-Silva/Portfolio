import { Flex, Stack } from "@chakra-ui/react"
import CardFull from "@/componentsPage/card/CardFull"
import TitleDescription from "@/componentsPage/shared/TitleDescription"

import { projetos } from "@/componentsPage/card/projectsData"



function CardContainer() {
    return (
        <Stack mt="90px" gap="8">
            <TitleDescription title="Projetos." text="Meus projetos são focados em design e desenvolvimento, sempre buscando criar soluções reais para o usuário." />
            <Flex wrap="wrap" gap="10" bg="bg.subtle" justify="center" p="5" borderRadius="2xl">
                {projetos.map((projeto, index) => (
                    <CardFull
                        key={index}
                        imgCard={projeto.imgCard}
                        iconDescriptionTechnologies={projeto.iconDescriptionTechnologies}
                        iconDescriptionText={projeto.iconDescriptionText}
                        textDescription={projeto.textDescription}
                        titleDescription={projeto.titleDescription}
                        textDialog={projeto.textDialog}
                        funcionalidades={projeto.funcionalidades}
                        linkGithub={projeto.linkGithub}
                        linkProjeto={projeto.linkProjeto}
                        mostrarBotao={index !== projetos.length -1}
                    >
                    </CardFull>
                ))}
            </Flex>
        </Stack>

    )
}

export default CardContainer