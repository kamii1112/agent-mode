import AddNote from "@/components/design-system/add-note"
import Layout from "@/components/design-system/layout"
import TitleList from "@/components/design-system/title-list"
import { Input } from "@/components/ui/input"
import { File, Search } from "lucide-react"

function AllNotes() {
    const renderNote = (note: string) => (
        <div className="flex items-center gap-2">
            <span className="p-2 bg-gray-100 rounded">
                <File size={16} />
            </span>
            <span>{note}</span>
        </div>
    )
    return (
        <Layout header="All Notes" headerIcon={<AddNote onAddNote={() => { }} />}>
            <div className="p-4 pt-6">
                <Input placeholder="Search" startIcon={<Search size='20' />} />
                <TitleList title="Notes" render={renderNote} items={["Note 1", "Note 2", "Note 3"]} />
                <TitleList title="Notes" render={renderNote} items={["Note 1", "Note 2", "Note 3"]} />
            </div>
        </Layout >
    )
}

export default AllNotes 