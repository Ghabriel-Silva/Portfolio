//Componentes do chakra ui
import { Box } from "@chakra-ui/react"

//Color mode
import AvatarUser from "@/componentsPage/shared/Avatar"

//Images
import imgAvatar from "@/assets/my-notion-face-transparent-white.png"

//icons 
import { ColorModeButton } from "@/components/ui/color-mode"


function App() {
  return (
    <Box>
      <ColorModeButton />
      <AvatarUser description="PORTFÓLIO 2025" image={imgAvatar} name="Gabriel silva" />

    </Box>
  )
}


export default App
