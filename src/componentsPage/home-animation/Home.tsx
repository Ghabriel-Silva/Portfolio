//Importação de componentes
import TextAnimation from "./TextAnimation"

// Importando tags do chakra
import { Flex, Text } from "@chakra-ui/react"

function Home() {
    return (
        <Flex  gap="2" direction="column"  align="center" mt="12">
            <Text fontSize="md" fontWeight="semibold" >Olá, meu nome é Gabriel</Text>
            <TextAnimation  role1="" role2="Front end" role3="Ui Design" role4="Developer" role5="Web Coffee" />
            <Text textAlign="center" fontSize={{base:"sm", md: "lg", lg:"xl"}} fontStyle="normal" fontWeight="normal"> Estudante de Engenharia de Software com conhecimentos em UX/UI Design e desenvolvimento Front-End.</Text>
        </Flex>
    )
}

export default Home