import { Stack, Heading, Box } from "@chakra-ui/react"
import GraficoList from "@/componentsPage/graficos/GraficoList"
import GraficoSegment from "@/componentsPage/graficos/GraficoSegment"

import TitleDescription from "@/componentsPage/shared/TitleDescription"

const ContainerGraficos = () => {
    return (
        <Stack
            mt="90px"
            gap={16}
            maxW="1200px"
            mx="auto"

        >
            <Stack gap={8}>
                <TitleDescription title="Insights." text="Aqui você pode ver a porcentagem aproximada de conhecimento em cada tecnologia." />
                <Box>
                    {/* <Heading as="h3" size="md" mb={2}>
                        Nível de conhecimento em %
                    </Heading> */}
                    {/* <Text mb={4} color="gray.500">
                        Aqui você pode ver a porcentagem aproximada de conhecimento em cada tecnologia.
                    </Text> */}
                    <GraficoList />
                </Box>
            </Stack>

            <Box>
                <Heading as="h3" size="md" mb={2}>
                    Relação de repositórios GitHub
                </Heading>
                {/* <Text mb={4} color="gray.500">
                    Visualização das linguagens mais usadas nos meus repositórios.
                </Text> */}
                <GraficoSegment />
            </Box>
        </Stack>
    )
}

export default ContainerGraficos
