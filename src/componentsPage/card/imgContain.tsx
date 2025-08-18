import { Box, Image } from "@chakra-ui/react"


import imgqualis from "@/assets/imgProjetos/qualys.png"
import imggeraCv from "@/assets/imgProjetos/curriculo.png"
import imgmaquiadora from "@/assets/imgProjetos/image-card-projetos-ketlin.png"
import imgeasy from "@/assets/imgProjetos/easyfood.png"

const image = {
  qualis: { src: imgqualis, alt: "Imagem do projeto Qualis 5S" },
  c: { src: imggeraCv, alt: "Imagem do projeto Gera CV" },
  maquiadora: { src: imgmaquiadora, alt: "Imagem do projeto Ketlin Maquiadora" },
  esyfood: { src: imgeasy, alt: "Imagem do projeto easy food" },
} as const; // congela o objeto para manter valores literais e chaves exatas.

export type imageProjetos = keyof typeof image

interface PropsImage {
  imagem: imageProjetos[]
}

function imgContain({ imagem }: PropsImage) {
  return (
    <Box borderTopRadius="lg" cursor="pointer" >
      {imagem.map((imgKey) => {
        const imgPropiedades = image[imgKey]
        return (
          <Image
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
            
            key={imgKey}
            src={imgPropiedades.src}
            alt={imgPropiedades.alt}
            borderRadius={"lg"}
          ></Image>
        )
      })}
    </Box>
  )
}

export default imgContain