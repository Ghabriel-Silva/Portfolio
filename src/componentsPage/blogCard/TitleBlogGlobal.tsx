import { Stack, Heading, Text, Box } from "@chakra-ui/react"

interface PropsTitleGlobal {
    titleBlogGlobal: string
    subtitleBlogGlobal: string
    autorBlogGlobal: string
}

function TitleBlogGlobal({ autorBlogGlobal, subtitleBlogGlobal, titleBlogGlobal }: PropsTitleGlobal) {
    return (
        <Stack w="100%" gap={5} alignItems={"center"}>
            <Heading size="5xl" fontWeight={"bold"} color="gra.fg" >
                {titleBlogGlobal}
            </Heading>
            <Box w="100%" h="1px" bg="gray.300" />
            <Text fontStyle={"xl"} fontWeight={"medium"} color="gra.fg">
                {subtitleBlogGlobal}
            </Text>
            <Text fontStyle={"sm"} fontWeight={"light"} color="text.fg_muted">
                {autorBlogGlobal}
            </Text>
        </Stack>
    )
}

export default TitleBlogGlobal