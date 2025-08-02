import { Avatar, HStack, Stack, Text, Circle, Float, Icon } from "@chakra-ui/react"

//Icons
import { FaCheckCircle } from "react-icons/fa";



interface Props {
  name: string
  image: string
  description?: string

}

const AvatarUser = ({ name, description, image  }: Props) => {
  return (
    <Stack>
      <HStack  gap={3}>
        <Avatar.Root>
          <Avatar.Fallback name={name} />
          <Avatar.Image src={image} />
          <Float placement="bottom-end" offsetX="1" offsetY="1" >
            <Circle
              bg="green.500"
              size="8px"
              outline="0.2em solid"
              outlineColor="bg"
            />
          </Float>
        </Avatar.Root>
        <Stack gap="0">
          <HStack>
            <Text fontWeight="medium">{name}</Text>
            <Icon size="sm" color="blue.500">
            <FaCheckCircle />
            </Icon>
          </HStack>
          {description &&
          <Text color="fg.muted" textStyle="2xs" _hover={{color: "gray.fg"}}>
            {description}
          </Text>}
        </Stack>
      </HStack>
    </Stack>

  )
}

export default AvatarUser