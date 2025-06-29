"use client"
import { Bar, BarChart as BarChartPrimitive, CartesianGrid, XAxis } from "recharts"

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

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

interface BarChartProps {
    data?: typeof chartData
    config?: ChartConfig
    footerClassName?: string
    footer?: React.ReactNode
    barChartRadius?: number
    title?: string
    description?: string
    xDataKey?: string
    graphDataKey?: string
}

export function BarChart({ data = chartData, config = chartConfig, footerClassName, footer, barChartRadius = 12, title, description, xDataKey, graphDataKey }: BarChartProps) {
    return (
        <Card className="shadow-none border-none">
            {title && description && <CardHeader>
                {title && <CardTitle>{title}</CardTitle>}
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>}
            <CardContent>
                <ChartContainer config={config}>
                    <BarChartPrimitive accessibilityLayer data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={xDataKey || "month"}
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        // tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey={graphDataKey || "desktop"} fill="var(--color-desktop)" radius={barChartRadius} />
                    </BarChartPrimitive>
                </ChartContainer>
            </CardContent>
            {footer && <CardFooter className={footerClassName}>
                {footer}
            </CardFooter>}
        </Card>
    )
}
