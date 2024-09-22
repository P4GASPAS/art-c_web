'use client'
import { useState } from "react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CardDemo from "@/app/Dashboard/Inventory/Cards"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const InventoryProducts = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[100%] p-2 text-center"
        >
            {!isOpen && <div className="grid grid-cols-12 gap-2 text-start m-2">
                <div className="col-span-3">
                    <CardDemo />
                </div>
                <div className="col-span-3">
                    <CardDemo />
                </div>
                <div className="col-span-3">
                    <CardDemo />
                </div>
                <div className="col-span-3">
                    <CardDemo />
                </div>
            </div>}

            <CollapsibleContent>
                <ScrollArea className="h-[90vh]">
                    <div className="grid grid-cols-12 gap-2 text-start m-2">
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                        <div className="col-span-3">
                            <CardDemo />
                        </div>
                    </div>
                </ScrollArea>
            </CollapsibleContent>

            <CollapsibleTrigger asChild>
                    <Button size="sm" className="w-6 px-8 text-black bg-gray-300 transform hover:scale-110 hover:bg-gray-400 transition ease-out duration-300">
                        {!isOpen && <p>More</p>}
                        {isOpen && <p>Less</p>}
                    </Button>
                </CollapsibleTrigger>
            </Collapsible>

    </div>
  )
}

export default InventoryProducts