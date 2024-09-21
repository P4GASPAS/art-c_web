import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    CornerDownLeft,
    Mic,
    Paperclip,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const page = () => {


  return (
    <div>
        <div className="text-center border-b-[1px] border-black">
            <h1 className="text-3xl font-semibold p-2">John Doe</h1>
        </div>
        <div>
            <ScrollArea className="h-[71vh] w-full p-2">
                <p>asdfasdfasfd</p>
            </ScrollArea>
        </div>
        <form action="" className="flex gap-2 items-center p-2">
            <Textarea
                placeholder="Type your message here..."
                className="resize-none min-h-12 focus-visible:ring-0 border-0 shadow-none"
            />
            <Button variant={"outline"} className="min-h-14 my-0">Send Message</Button>
        </form>
    </div>
  )
}

export default page