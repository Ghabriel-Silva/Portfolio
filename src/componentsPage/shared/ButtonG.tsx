import { Button, DownloadTrigger} from "@chakra-ui/react"
import testePdf from "@/assets/teste.pdf"
type Props = {
  text?: string
}

function ButtonG({ text = 'Butão' }: Props) {
  const data =  testePdf
  return (

    <DownloadTrigger
      data={data}
      fileName="Curriculo.pdf"
      mimeType="text/plain"
      asChild
    >
    <Button
      borderRadius="lg" w={{ base: '120px', md: '140px', lg: "155px" }} size={{ base: 'sm', md: 'md', lg: "lg" }}>{text}
    </Button> 
    </DownloadTrigger>
  )
}

export default ButtonG