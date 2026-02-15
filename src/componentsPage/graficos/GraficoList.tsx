
import { BarList,  type BarListData, useChart } from "@chakra-ui/charts"
const Grafico = () => {

    const chart = useChart<BarListData>({
        sort: { by: "value", direction: "desc" },
        data: [
            { name: "Figma", value: 90 },
            { name: "HTML & CSS", value: 90 },
            { name: "JavaScript", value: 80 },
            { name: "Git & GitHub", value: 70 },
            { name: "Express.js", value: 80 },
            { name: "TypeScript", value: 80 },
            { name: "React/Next", value: 80 },
        ],
        series: [{ name: "name", color: "teal.subtle" }],

    })

    
    return (
        
            <BarList.Root chart={chart}>
                <BarList.Content>
                    <BarList.Bar />
                    <BarList.Value valueFormatter={(value) => ` ${value} % `}/>
                </BarList.Content>
            </BarList.Root>
        
    )
}

export default Grafico