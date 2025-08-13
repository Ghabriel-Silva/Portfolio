import {Stack, Text, Heading } from "@chakra-ui/react"


interface Conteudo {
    title:string
    subtitle:string
    description: string
}
const TextBlog = ({title, subtitle, description}:Conteudo) => {
  return (
    <Stack gap={6} >
        <Heading  size="2xl" fontWeight={"medium"} >{title}</Heading>
        <Stack gap={2} >
            <Text textStyle={"sm"} fontWeight={"medium"} color={"blue.fg"} >{subtitle}</Text>
            <Text textStyle={"md"} fontWeight={"light"} color={"gray.fg"}>{description} </Text>
        </Stack>
    </Stack>
  )
}

export default TextBlog