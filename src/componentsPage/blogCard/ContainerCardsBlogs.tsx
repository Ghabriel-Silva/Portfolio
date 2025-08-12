//importando objeto que contem os dados
import { cardBlogsData } from "@/componentsPage/blogCard/blogData"
//importando componente cards
import CardFullBlog from "@/componentsPage/blogCard/CardFullBlog"

//importando tags do chakra
import { Stack } from "@chakra-ui/react"


function ContainerCardsBlogs() {
    return (
        <Stack>
            {cardBlogsData.map((card, index) => (
                <CardFullBlog
                    key={index}
                    imageBlogCard={card.imageBlogCard}
                    titleBlogCard={card.titleBlogCard}
                    subtitleBlogCard={card.subtitleBlogCard} 
                    descriptionBlogCard={card.descriptionBlogCard}
                    image={card.image}
                    name={card.name}
                    description={card.description}
                />
            ))}
        </Stack>
    )
}

export default ContainerCardsBlogs