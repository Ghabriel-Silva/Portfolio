import { Flex, Stack } from "@chakra-ui/react"
import CardFull from "@/componentsPage/card/CardFull"
import TitleDescription from "@/componentsPage/shared/TitleDescription"

import { projetos } from "@/componentsPage/card/projectsData"



function CardContainer() {
    return (
        <Stack mt="90px" gap="8">
            <TitleDescription title="Projetos." text="Projetos baseados em demandas reais do mercado e regras de negócio, com foco em soluções aplicáveis e bem estruturadas." />
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
                    >
                    </CardFull>
                ))}
            </Flex>
        </Stack>

    )
}

export default CardContainer