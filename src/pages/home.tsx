import AddNote from "@/components/design-system/add-note"
import Layout from "@/components/design-system/layout"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

function Home() {
    return (
        <Layout header="My Application">

            <div>Home</div>
            <div>Home</div>
            <AddNote onAddNote={() => { }} />
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created", {
                        // description: "Sunday, December 03, 2023 at 9:00 AM",
                        // action: {
                        //     label: "Undo",
                        //     onClick: () => console.log("Undo"),
                        // },
                    })
                }
            >
                Show Toast
            </Button>
        </Layout>
    )
}

export default Home