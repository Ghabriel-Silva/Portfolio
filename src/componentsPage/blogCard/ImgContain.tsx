import { Box, Image } from "@chakra-ui/react"
//Importação de images
import imgBlogCoffee from "@/assets/imgBlog/coffe-padrao.png"
import imgBlogLinguagem from "@/assets/imgBlog/porque-padrao.png"
import imgBlogDevJava from "@/assets/imgBlog/java-padrao.png"
import imgBlogLinkedin from "@/assets/imgBlog/in-padrao.png"



const textoAlt: string = "Imagem de capa do assunto do  blog"

export const imageBlogs = {
    coffee: { src: imgBlogCoffee, alt: textoAlt },
    linguagem: { src: imgBlogLinguagem, alt: textoAlt },
    DevJava: { src: imgBlogDevJava, alt: textoAlt },
    linkedin: { src: imgBlogLinkedin, alt: textoAlt }
} as const


export type imageBg = keyof typeof imageBlogs

interface PropsImagem {
    image: imageBg
}

const ImgContain = ({ image }: PropsImagem) => {
    return (
        <Box>
            <Image
                objectFit="cover"
                objectPosition="center"
                src={imageBlogs[image].src}
                alt={imageBlogs[image].alt}
            />
        </Box>
    )
}

export default ImgContain