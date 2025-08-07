import { Box, Image } from "@chakra-ui/react"


import imgqualis from "@/assets/imgProjetos/image-card-projetos-agenda.png"
import imggappelt from "@/assets/imgProjetos/image-card-projetos-gappelt.png"
import imggeraCv from "@/assets/imgProjetos/image-card-projetos-gera-cv.png"
import imgmaquiadora from "@/assets/imgProjetos/image-card-projetos-ketlin.png"
import imgportfólio from "@/assets/imgProjetos/image-card-projetos-portfólio.png"
import imgUxUI from "@/assets/imgProjetos/image-card-projetos-ux.png"

const image = {
  qualis: { src: imgqualis, alt: "Imagem do projeto Qualis 5S" },
  gappelt: { src: imggappelt, alt: "Imagem do projeto Gappelt" },
  c: { src: imggeraCv, alt: "Imagem do projeto Gera CV" },
  maquiadora: { src: imgmaquiadora, alt: "Imagem do projeto Ketlin Maquiadora" },
  portfolio: { src: imgportfólio, alt: "Imagem do projeto Portfólio" },
  uxui: { src: imgUxUI, alt: "Imagem do projeto UX/UI" },
} as const;

export type imageProjetos = keyof typeof image

interface PropsImage {
  imagem: imageProjetos[]
}

function imgContain({ imagem }: PropsImage) {
  return (
    <Box >
      {imagem.map((imgKey) => {
        const imgPropiedades = image[imgKey]
        return (
          <Image
            objectFit="contain"    // Faz a imagem caber inteira mantendo proporção
            objectPosition="center" // Centraliza a imagem dentro do container
            width="100%"           // Largura total do container
            height="100%"
            key={imgKey}
            src={imgPropiedades.src}
            alt={imgPropiedades.alt}
          ></Image>
        )
      })}
    </Box>
  )
}

export default imgContain