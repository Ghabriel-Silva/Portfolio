//Importação de componentes
import TextAnimation from "./TextAnimation"
import ButtonG from "@/componentsPage/shared/ButtonG"

// Importando tags do chakra
import { Flex, Text, Box} from "@chakra-ui/react"

function home() {
    return (
        <Flex  gap="4" direction="column"  align="center" mt="12" my="12">
            <Text fontSize="md" fontWeight="semibold" >Olá, meu nome é Gabriel</Text>
            <TextAnimation  role1="" role2="Front end" role3="Ui Design" role4="Developer" role5="Web Coffee" />
            <Text textAlign="center" fontSize={{base:"sm", md: "lg", lg:"xl"}} fontStyle="normal" fontWeight="normal"> Estudante de Engenharia de Software com conhecimentos em UX/UI Design e desenvolvimento Front-End.</Text>
            <Box mt="4">
                <ButtonG text="Baixar Cv"  />
            </Box>
        </Flex>
    )
}

export default home