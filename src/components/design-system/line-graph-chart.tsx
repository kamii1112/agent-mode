"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

interface LineGraphChartProps {
    data?: typeof chartData
    config?: ChartConfig
    footerClassName?: string
    footer?: React.ReactNode
    title?: string
    description?: string
    dataKey?: string
    xDataKey?: string
    graphDataKey?: string
}

export function LineGraphChart({
    data = chartData,
    config = chartConfig,
    footerClassName,
    footer,
    title,
    description,
    xDataKey,
    graphDataKey,
}: LineGraphChartProps) {
    return (
        <Card className="shadow-none border-none">
            {title && description && <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>}
            <CardContent>
                <ChartContainer config={config || chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={data || chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={xDataKey || "month"}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        // tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey={graphDataKey || "desktop"}
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            {footer && <CardFooter className={footerClassName}>
                {footer}
            </CardFooter>}
        </Card>
    )
}
