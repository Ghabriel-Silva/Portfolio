import { Accordion, Span, Stack, Text, Heading, Highlight } from "@chakra-ui/react"

type Props = {}

function Acordeao({ }: Props) {
  return (
    <Stack   mt="90px">
      <Stack gap={6}>
        <Text  textAlign={"center"} color="fg.muted" fontStyle="normal" fontWeight="500"  >PERGUNTAS E RESPOSTAS</Text>
        <Heading textAlign={"center"} lineHeight="tall" fontSize="5xl" fontWeight="semibold">
          <Highlight
            query={["fazem"]}
            styles={{ px: "0.5", bg: "purple.subtle" }}
          >
            Perguntas que Geralmente me fazem
          </Highlight>
        </Heading>
      </Stack>
      <Accordion.Root collapsible size="md" >
        {items.map((item, index) => (
          <Accordion.Item key={index} my="46px" value={item.value}>
            <Accordion.ItemTrigger>
              <Span flex="1"  >{item.title}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  )
}

const items = [
  { value: "a", title: "Você está cursando faculdade?", text: "Sim! Atualmente curso Engenharia de Software e me aprimoro diariamente, buscando construir uma base sólida que una teoria e prática para criar soluções inovadoras." },
  { value: "a1", title: "Qual tecnologia você utiliza?", text: "Atualmente venho me aperfeiçoando em TypeScript, mas também possuo conhecimentos em HTML, CSS, JavaScript, MySQL, Express, Handlebars, Bootstrap, Chakra UI e Figma." },
  { value: "b", title: "Você já trabalhou com projetos de desenvolvimento?", text: "Sim. Já desenvolvi landing pages, um projeto Fullstack de gerenciamento de pedidos e ferramentas como um gerador de currículos online, utilizado por familiares e amigos." },
  { value: "c", title: "Você tem experiência com programação?", text: "Tenho sim. Apesar de ainda não ter atuado em uma empresa da área, já desenvolvi projetos reais e continuo me aprimorando com estudos e desafios práticos." },
  { value: "d", title: "Qual o seu nível de conhecimento em Figma?", text: "Avançado. Domino auto layout, componentes dinâmicos, uso de variáveis e prototipação. Costumo transformar os protótipos diretamente em código com facilidade." },
  { value: "e", title: "Você está buscando estágio ou vaga como desenvolvedor júnior?", text: "Sim! Estou em busca da minha primeira oportunidade na área, seja como estagiário ou como dev júnior. Estou preparado para contribuir, aprender e crescer junto com a equipe." },
]

export default Acordeao