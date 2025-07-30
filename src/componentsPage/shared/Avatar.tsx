import {Box, Text} from "@chakra-ui/react"

interface Props  {
    name:string
    description:string
    image:string
}

const Avatar = ({name, description, image}:Props) => {
  return (
    <Box>
        <Text> {name} </Text>
        <Text> {description} </Text>
        <Text> {image} </Text>
    </Box>
  )
}

export default Avatar