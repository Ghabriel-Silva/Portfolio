import { Button, Box} from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import Avatar from "./componentsPage/shared/Avatar"


function App() {
  const { toggleColorMode } = useColorMode()
  return (
    <Box>
      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
      <Avatar description="nada demias" image="fnfdndjfndjfd" name="TGabriel silva"/>
    </Box>

  )
}


export default App
