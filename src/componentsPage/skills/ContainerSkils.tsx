import { Flex, Stack} from "@chakra-ui/react"
import CardSkils from "@/componentsPage/skills/CardSkils"
import TitleDescription from "@/componentsPage/shared/TitleDescription"
import { skills } from "@/componentsPage/skills/SkillsData"

function ContainerSkils() {
    return (
        <Stack  mt="90px" gap="8" overflow="hidden">
             <TitleDescription title="Habilidades." text="Minhas habilidades abrange desde da pesquisa até o deploy de um projeto." />
            <Flex wrap="wrap" gap="16" bg="bg.subtle" justify="center" p="5" borderRadius="xl" >
                {skills.map((skill, index) => (
                    <CardSkils
                        key={index}
                        chave={skill.chave}
                        text={skill.text}
                        title={skill.title}
                        imgIcon={skill.imgIcon}
                        imagem={skill.imagem}
                    />
                ))}
            </Flex>
        </Stack>
    )
}

export default ContainerSkils