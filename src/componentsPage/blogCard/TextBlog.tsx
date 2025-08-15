import { Stack, Text, Heading, Link } from "@chakra-ui/react"


interface Conteudo {
  title: string
  subtitle: string
  description: string
  linkBlogs: string
}
const TextBlog = ({ title, subtitle, description, linkBlogs }: Conteudo) => {
  return (
    <Stack gap={6} >
      <Link href={linkBlogs} target="_blank">
        <Heading cursor={"pointer"} size="2xl" fontWeight={"medium"} >{title}</Heading>
      </Link>
      <Stack gap={2} >
        <Text textStyle={"sm"} fontWeight={"medium"} color={"blue.fg"} >{subtitle}</Text>
        <Text textStyle={"md"} fontWeight={"light"} color={"gray.fg"}>{description} </Text>
      </Stack>
    </Stack>
  )
}

export default TextBlog