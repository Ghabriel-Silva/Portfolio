import { Box, Tabs } from "@chakra-ui/react"

type Props = {}

function CodeAnimation({ }: Props) {
    return (
        <Box
            position="relative"
            className="bg"
            h='340px'
        >
            <Box
                h="321px"
                w={{ base: "100%", md: "90%", lg: "85%" }}
                position="absolute"
                top="60%"
                left="50%"
                transform="translate(-50%, -50%)"
                rounded="md"
            >

                <Tabs.Root   lazyMount unmountOnExit defaultValue="developer" borderTopRadius="2xl" bg="bg.muted" variant={"outline"} width="full" h="full"  shadow="md">
                    <Tabs.List pt="4" pl="4"  bg="bg.subtle" borderTopRadius="2xl">
                        <Tabs.Trigger value="developer">
                            Developer
                        </Tabs.Trigger>
                        <Tabs.Trigger value="ui">
                            UI designer
                        </Tabs.Trigger>
                        <Tabs.Trigger value="coffee">
                            Coffee
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content pl="4"  value="developer">Managdee your team members</Tabs.Content>
                    <Tabs.Content   pl="4" value="ui">Manage your projects</Tabs.Content>
                    <Tabs.Content  pl="4" value="coffee">
                        Manage your tasks for freelancers
                    </Tabs.Content>
                </Tabs.Root>
            </Box>
        </Box>

    )
}

export default CodeAnimation