import { Button, Link } from "@chakra-ui/react"
import testePdf from "@/assets/curriculo-gabriel.pdf"
type Props = {
  text?: string
}

function ButtonG({ text = 'Butão' }: Props) {
  return (

    <Link variant="plain" href={testePdf} target="_blank">
      <Button
        borderRadius="lg"
        w={{ base: "120px", md: "140px", lg: "155px" }}
        size={{ base: "sm", md: "md", lg: "lg" }}
      >
        {text}
      </Button>
    </Link>

  )
}

export default ButtonG