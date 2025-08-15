import { Flex, Image } from "@chakra-ui/react"
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
        <Flex justify={"center"} align={"center"} overflow={"hidden"} w="100%" >
            <Image
                width={"100%"}
                objectFit="cover"
                height={"300px"}
                objectPosition="center"
                src={imageBlogs[image].src}
                alt={imageBlogs[image].alt}
                _hover={{ transform: "scale(1.2)" }}
                _active={{ transform: "scale(1.2)" }}
                transition="transform 1s ease"
                tabIndex={0}
                _focus={{ transform: "scale(1.2)" }}
                cursor={"pointer"}

            />
        </Flex>
    )
}

export default ImgContain