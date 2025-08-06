import { Stack} from "@chakra-ui/react"

import TitleDescriptionCard from "@/componentsPage/card/TitleDescriptionCard"
import IconsDescription from "@/componentsPage/card/IconsDescription"
import ImgContain from "@/componentsPage/card/imgContain"

type Props = {}

function CardFull({ }: Props) {
    return (
        <Stack py="10px">
            <TitleDescriptionCard text="Site maquiadora" title="Site maquiadora " />
            <IconsDescription defaultText="Projeto" technologies={["react", "notion", "behance"]} />
           <ImgContain imagem={["maquiadora", "gappelt", "portfolio", "uxui"]}/>
        </Stack>
    )
}

export default CardFull