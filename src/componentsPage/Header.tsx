//componentes 
import AvatarUser from "@/componentsPage/shared/Avatar"
import { RxHamburgerMenu } from "react-icons/rx";
import { HStack, Link, useMediaQuery, Icon } from "@chakra-ui/react"

//Color mode 
import { ColorModeButton } from "@/components/ui/color-mode"

//Image
import imgAvatar from "@/assets/my-notion-face-transparent-white.png"


import { Flex } from "@chakra-ui/react"

type Props = {}

function Header({ }: Props) {

    const [isMobile] = useMediaQuery(["(max-width: 650px)"]);
   

    return (
        <Flex
            justify="space-between"
            align='center'
        >
            <AvatarUser description="PORTFÓLIO 2025" image={imgAvatar} name="Gabriel silva" />
            {isMobile ? (

                <HStack>
                    <ColorModeButton />
                    <Icon size="lg">
                        <RxHamburgerMenu />
                    </Icon>
                </HStack>
                
            ):(
                <HStack gap={12}>
                    
                <HStack gap={9} >
                    <Link textStyle="sm" fontWeight="normal" href="#">Home</Link>
                    <Link textStyle="sm" fontWeight="normal" href="#">Projetos</Link>
                    <Link textStyle="sm" fontWeight="normal" href="#">Skills</Link>
                    <Link textStyle="sm" fontWeight="normal" href="#">Blog</Link>
                    <Link textStyle="sm" fontWeight="normal" href="#">Contato</Link>
                </HStack>
                <ColorModeButton />
            </HStack>
            )}
        </Flex>
    )
}

export default Header