import { Box, Stack, HStack, Text, Icon, Heading } from "@chakra-ui/react"

import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";


interface Props {
  title: string
  text: string
}

function TitleDescription({ title, text }: Props) {
  const [isHovered, setIsHoverad] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleMaouseEnter = () => setIsHoverad(true)
  const handleMouseClick = () => setIsClicked(true)

  const handleMaouseLeave = () => {
    setIsHoverad(false)
    setIsClicked(false)
  }

  const iconColor = isClicked
    ? "purple.solid"
    : isHovered ? "purple.solid" : "purple.focusRing"

  return (
    <Box
      onMouseEnter={handleMaouseEnter}
      onClick={handleMouseClick}
      onMouseLeave={handleMaouseLeave}
      cursor="pointer"
      transition="all 0.2s"
    >
      <Stack gap="1">
        <Heading fontWeight="normal">{title}</Heading>
        <HStack justify="space-between">
          <Text color="gray.fg" fontWeight="light" >{text}</Text>
          <Icon color={iconColor}>
            <MdArrowForwardIos />
          </Icon>
        </HStack>
      </Stack>
    </Box>
  )
}

export default TitleDescription