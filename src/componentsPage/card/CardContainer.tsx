import { Flex, Stack } from "@chakra-ui/react"
import CardFull from "@/componentsPage/card/CardFull"
import TitleDescription from "@/componentsPage/shared/TitleDescription"
type Props = {}

import { projetos } from "@/componentsPage/card/projectsData"

function CardContainer({ }: Props) {
    return (
        <Stack mt="90px" gap="8">
            <TitleDescription title="Projetos." text="Meus projetos são focados em design e desenvolvimento, sempre alinhados com os princípios da boa programação." />

            <Flex wrap="wrap" gap="10" bg="bg.muted" justify="center" p="5" borderRadius="3xl">
                {projetos.map((projeto, index) => (
                    <CardFull
                        key={index}
                        imgCard={projeto.imgCard}
                        iconDescriptionTechnologies={projeto.iconDescriptionTechnologies}
                        iconDescriptionText={projeto.iconDescriptionText}
                        textDescription={projeto.textDescription}
                        titleDescription={projeto.titleDescription}
                    >
                    </CardFull>
                ))}
            </Flex>
        </Stack>

    )
}

export default CardContainer