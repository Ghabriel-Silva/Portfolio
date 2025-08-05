import { Box, Tabs, Text } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';
type Props = {}

function CodeLines({ n }: { n: number }) {
  return (
    <Box pr="4" userSelect="none" pt="4px">
      {Array.from({ length: n }, (_, i) => ( // 🔹 Array.from cria um array a partir de um valor "iterável"; o primeiro argumento { length: n } define o tamanho com valores undefined, e o segundo é uma função de mapeamento com (_, i), onde _ é o valor atual (ignorado) e i é o índice de 0 até n - 1.
        <Text key={i} color="gray.500" fontSize="sm">
          {i + 1}
        </Text>
      ))}
    </Box>
  );
}

function CodeAnimation({ }: Props) {
    return (
        <Box
            position="relative"
            className="bg"
            h='340px'
        >
            <Box
                h={{sm:"340px", md:"334px", lg:"334px"}}
                w={{ base: "100%", md: "90%", lg: "85%" }}
                position="absolute"
                top="60%"
                left="50%"
                transform="translate(-50%, -50%)"
                rounded="md"
            >
                

                <Tabs.Root lazyMount unmountOnExit defaultValue="developer" borderTopRadius="2xl" bg="bg.muted" variant={"outline"} width="full" h="full" shadow="md">
                    <Tabs.List pt="4" pl={{ base: "0px", md: "4", lg: "4" }} bg="bg.subtle" borderTopRadius="2xl">
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
                    <Tabs.Content pl="4" value="developer" display="flex">
                        <CodeLines n={12} />
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(300)
                                    .typeString(`<span style="color:#2563EB;">const </span><span style="color:#92310A;">dev = {</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#A41752;">linguagem:</span> <span style="color:#116932;">"TypeScript"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#A41752;">front:</span> <span style="color:#116932;">"React"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#A41752;">ui:</span> <span style="color:#116932;">"Chakra UI"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#A41752;">meta:</span> <span style="color:#116932;">"Clean Code"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#92310A;">};</span><br><br>`)
                                    .pauseFor(200)
                                    .typeString(`<span style="color:#2563EB;">if</span><span style="color:#92310A;">( dev.meta === </span><span style="color:#116932;">"clean code"</span><span style="color:#92310A;"> ) {</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#A41752;">console</span><span style="color:#92310A;">.log(</span><span style="color:#116932;">"Se tá limpo, não é Java."</span><span style="color:#92310A;">);</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#92310A;">}</span>`)
                                    .start();
                            }}
                            options={{
                                delay: 20,
                                cursor: "|",
                            }}
                        />
                    </Tabs.Content>
                    <Tabs.Content pl="4" value="ui" display="flex">
                        <CodeLines n={12} />
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(300)
                                    .typeString(`<span style="color:#2563EB;">const</span> <span style="color:#92310A;">design = {</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">tool</span>: <span style="color:#116932;">"Figma"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">mode</span>: <span style="color:#116932;">"Auto Layout"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">layers</span>: <span style="color:#116932;">32</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">status</span>: <span style="color:#116932;">"pixel perfect"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#92310A;">};</span><br><br>`)
                                    .pauseFor(200)
                                    .typeString(`<span style="color:#2563EB;">if</span> <span style="color:#92310A;">(design.status === </span><span style="color:#116932;">"pixel perfect"</span><span style="color:#92310A;">) {</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">console</span><span style="color:#92310A;">.log(</span><span style="color:#116932;">"Interface aprovada!"</span><span style="color:#92310A;">);</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#92310A;">}</span>`)
                                    .start();
                            }}
                            options={{
                                delay: 20,
                                cursor: "|",
                            }}
                        />

                    </Tabs.Content>
                    <Tabs.Content pl="4" value="coffee" display="flex">
                        <CodeLines n={12} />
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(300)
                                    .typeString(`<span style="color:#2563EB;">const</span> <span style="color:#92310A;">cafe = {</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">tipo</span>: <span style="color:#116932;">"Preto"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">ml</span>: <span style="color:#116932;">250</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">Adoçado</span>: <span style="color:#116932;">"Sim"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">status</span>: <span style="color:#116932;">"quente"</span>,<br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#92310A;">};</span><br><br>`)
                                    .pauseFor(200)
                                    .typeString(`<span style="color:#2563EB;">if</span> <span style="color:#92310A;">(cafe.status === </span><span style="color:#116932;">"quente"</span><span style="color:#92310A;">) {</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`&nbsp;&nbsp;<span style="color:#A41752;">console</span><span style="color:#92310A;">.log(</span><span style="color:#116932;">"Café na mesa, código na cabeça."</span><span style="color:#92310A;">);</span><br>`)
                                    .pauseFor(100)
                                    .typeString(`<span style="color:#92310A;">}</span>`)
                                    .start();
                            }}
                            options={{
                                delay: 20,
                                cursor: "|",
                            }}
                        />
                    </Tabs.Content>
                </Tabs.Root>
            </Box>
        </Box>

    )
}

export default CodeAnimation