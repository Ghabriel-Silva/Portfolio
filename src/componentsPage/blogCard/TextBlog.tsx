import {Stack, Text, Heading } from "@chakra-ui/react"


interface Conteudo {
    title:string
    subtitle:string
    description: string
}
const TextBlog = ({title, subtitle, description}:Conteudo) => {
  return (
    <Stack>
        <Heading>{title}</Heading>
        <Stack>
            <Text>{subtitle}</Text>
            <Text>{description} </Text>
        </Stack>
    </Stack>
  )
}

export default TextBlog