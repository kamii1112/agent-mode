import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent, DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Calendar } from "../ui/calendar"


interface CalendarDrawerProps {
    date: Date | undefined
    setDate: (date: Date | undefined) => void
    trigger?: React.ReactNode
    triggerClassName?: string
}

function CalendarDrawer({ date, setDate, trigger, triggerClassName }: CalendarDrawerProps) {

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" className={triggerClassName}>{trigger}</Button>
            </DrawerTrigger>
            <DrawerContent className="px-4">
                <DrawerHeader className="p-4">
                    <DrawerTitle className="text-[22px]">Calendar Drawer</DrawerTitle>
                </DrawerHeader>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full"
                    captionLayout="dropdown"
                />
            </DrawerContent>
        </Drawer>
    )
}


export default CalendarDrawer