import { Stack, Text, Heading } from "@chakra-ui/react"


interface Props {
    title: string
    text: string
}

function TitleDescription({ title, text }: Props) {
    return (
        <Stack mt="90px" >
            <Heading size="5xl" fontWeight="bold">{title}</Heading>
            <Text textStyle="md" color="gray.fg" maxW="460px">{text}</Text>
        </Stack>
    )
}

export default TitleDescription