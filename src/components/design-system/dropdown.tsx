import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownProps {
    options: { value: string, label: string }[];
    value: string;
    onSelect: (value: string) => void;
    placeholder?: string;
}

export function Dropdown({ options, value, onSelect, placeholder = 'Select' }: DropdownProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">{value || placeholder}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]" align="start">
                <DropdownMenuGroup>
                    {options.map((option) => (
                        <DropdownMenuItem key={option.value} onClick={() => onSelect(option.value)}>
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
