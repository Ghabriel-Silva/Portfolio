import { BarSegment, useChart } from "@chakra-ui/charts"

const GraficoSegment = () => {
    const chart = useChart({
        sort: { by: "value", direction: "desc" },
        data: [
            { name: "JavaScript", value: 3, color: "yellow.400" },
            { name: "TypeScript", value: 4, color: "blue.400" },
        ],
    })

    return (
        <BarSegment.Root chart={chart}>
            <BarSegment.Content>
                <BarSegment.Value />
                <BarSegment.Bar />
                <BarSegment.Label />
            </BarSegment.Content>
        </BarSegment.Root>
    )
}

export default GraficoSegment