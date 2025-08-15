//importando objeto que contem os dados
import { cardBlogsData } from "@/componentsPage/blogCard/blogData"
//importando componente cards
import CardFullBlog from "@/componentsPage/blogCard/CardFullBlog"
import TitleBlogGlobal from "@/componentsPage/blogCard/TitleBlogGlobal"

//importando tags do chakra
import { Flex, Box } from "@chakra-ui/react"


function ContainerCardsBlogs() {
    return (
        <Flex wrap="wrap" gap={14} justify={"center"} mt="90px">
            <TitleBlogGlobal titleBlogGlobal="Mini Blog" subtitleBlogGlobal="Artigos populares" autorBlogGlobal="Escrito por Gabriel Silva" />
            {cardBlogsData.map((card, index) => {
                const isFullWidth = index % 4 === 0

                return (
                    <Box
                        key={index}
                        flex={isFullWidth ? "1  100%" : "1  29.6%"} // shorthand reduzido (flex-grow + flex-basis)
                        p={2}>
                        <CardFullBlog
                            key={index}
                            imageBlogCard={card.imageBlogCard}
                            titleBlogCard={card.titleBlogCard}
                            subtitleBlogCard={card.subtitleBlogCard}
                            descriptionBlogCard={card.descriptionBlogCard}
                            image={card.image}
                            name={card.name}
                            description={card.description}
                            linkBlogs={card.linkBlogs}
                        />
                    </Box>

                )
            })}
            <Box w="100%" h="1px" bg="gray.300" />
        </Flex>
    )
}

export default ContainerCardsBlogs