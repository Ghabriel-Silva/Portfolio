import { Box, Image } from "@chakra-ui/react"

import { Carousel } from "@chakra-ui/react"
import { image, type imageProjetos } from "./imageCardsIndex"


interface PropsImage {
  imagem: imageProjetos[]
}

function ImgContain({ imagem }: PropsImage) {
  return (
    <Box borderTopRadius="lg" overflow="hidden" >
      <Carousel.Root
        loop={true}
        slideCount={imagem.length}
        allowMouseDrag={true}
        autoplay={true}
      
        w="100%"
        position="relative"
      >
        {/* Slides */}
        <Carousel.ItemGroup>
          {imagem.map((imgKey, index) => {
            const imgProp = image[imgKey]

            return (
              <Carousel.Item key={imgKey} index={index}>
                <Image
                  w="100%"
                  h="auto"
                  objectFit="cover"
                  src={imgProp.src}
                  alt={imgProp.alt}
                
                />
              </Carousel.Item>
            )
          })}
        </Carousel.ItemGroup>


        <Carousel.Control justifyContent="center" gap="4">
          <Carousel.Indicators />
        </Carousel.Control>
      </Carousel.Root>
    </Box>
  )
}

export default ImgContain
