import { BarSegment, useChart } from "@chakra-ui/charts"

const GraficoSegment = () => {
    const chart = useChart({
        sort: { by: "value", direction: "desc" },
        data: [
            { name: "JavaScript", value: 5, color: "yellow.400" },
            { name: "TypeScript", value: 1, color: "blue.400" },
            { name: "CSS", value: 1, color: "teal.400" },
            { name: "Other", value: 1, color: "purple.200" },
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