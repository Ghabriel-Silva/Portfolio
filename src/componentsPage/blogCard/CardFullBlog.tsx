//importação de componentes menores e arquivos de dados card blog
import AvatarUser from "@/componentsPage/shared/Avatar"
import ImgContain from "@/componentsPage/blogCard/ImgContain"
import TextBlog from "@/componentsPage/blogCard/TextBlog"

//importação de tags chkra ui
import { Stack } from "@chakra-ui/react"

//importando interfaces que irei utilizar
import type { dataBlogs } from "@/componentsPage/blogCard/blogData"
import type { AvatarProps } from "@/componentsPage/shared/Avatar"


interface PropsCardsBlogs extends dataBlogs, AvatarProps { }

function CardFullBlog({
  imageBlogCard,
  titleBlogCard,
  subtitleBlogCard,
  descriptionBlogCard,
  image,
  name,
  description,
}: PropsCardsBlogs) {
  return (
    <Stack minW={"220px"} gap={7}>
      <ImgContain image={imageBlogCard} />
      <TextBlog title={titleBlogCard} subtitle={subtitleBlogCard} description={descriptionBlogCard} />
      <AvatarUser image={image} name={name} description={description} />
    </Stack>
  )
}

export default CardFullBlog