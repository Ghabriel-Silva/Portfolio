import CardSkils from "@/componentsPage/skills/CardSkils"
import { Flex } from "@chakra-ui/react"
import { skills } from "@/componentsPage/skills/SkillsData"

function ContainerSkils() {
    return (
        <Flex wrap="wrap" gap="16" bg="bg.subtle" justify="center" p="5" borderRadius="xl" mt="90px">
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
    )
}

export default ContainerSkils