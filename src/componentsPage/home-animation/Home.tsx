//Importação de componentes
import TextAnimation from "./TextAnimation"
import ButtonG from "@/componentsPage/shared/ButtonG"

// Importando tags do chakra
import { Flex, Text, Box} from "@chakra-ui/react"

function home() {
    return (
        <Flex  gap="4" direction="column"  align="center"  my="12">
            <Text fontSize="md" fontWeight="semibold" mt="36px" >Olá, meu nome é Gabriel</Text>
            <TextAnimation  role1="" role2="Developer" role3="FullStack" role4="UI Design" role5="Web Coffee" />
            <Text textAlign="center" fontSize={{base:"sm", md: "lg", lg:"xl"}} fontStyle="normal" fontWeight="normal">Estudante de Engenharia de Software com conhecimentos em desenvolvimento full stack, Figma, React, JavaScript, TypeScript, Express e MySQL.</Text>
            <Box mt="4">
                <ButtonG text="Baixar Cv"  />
            </Box>
        </Flex>
    )
}

export default home