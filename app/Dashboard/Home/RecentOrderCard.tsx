import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
  } from "@/components/ui/pagination"

const RecentOrderCard = () => {
  return (
    <Card>
        <CardHeader className="bg-muted/50">
            <CardTitle className="text-lg">Recent Order</CardTitle>
            <CardDescription>Date: November 18, 2013</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
            <p className="font-semibold my-2">Account Info:</p>
            <ul className="grid gap-2 text-sm">
                <li className="flex items-center justify-between">
                    <span>ID:</span>
                    <span>101022</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Name:</span>
                    <span>Dony Castro</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Email:</span>
                    <span>DonyD432@yahoo.com</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Contact:</span>
                    <span>09543456930</span>
                </li>
            </ul>

            <Separator className="my-2"/>

            <p className="font-semibold my-2">Order Info:</p>
            <ul className="grid gap-2 text-sm">
                <li className="flex items-center justify-between">
                    <span>Cooling fan x2</span>
                    <span>119</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>exhaust x1</span>
                    <span>289</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Frame x1</span>
                    <span>1197</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Front brakes x4</span>
                    <span>238</span>
                </li>
            </ul>

            <Separator className="my-2"/>

            <ul className="grid gap-2 text-sm">
                <li className="flex items-center justify-between">
                    <span>Subtotal:</span>
                    <span>1843</span>
                </li>
            </ul>

            <Separator className="my-2"/>

            <p className="font-semibold my-2">Service Info:</p>
            <ul className="grid gap-2 text-sm">
                <li className="flex items-center justify-between">
                    <span>Check up tail light</span>
                    <span>119</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Change oil</span>
                    <span>120</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Change brake pads</span>
                    <span>80</span>
                </li>
                <li className="flex items-center justify-between">
                    <span>Charge battery</span>
                    <span>180</span>
                </li>
            </ul>

            <Separator className="my-2"/>

            <ul className="grid gap-2 text-sm">
                <li className="flex items-center justify-between">
                    <span>Subtotal:</span>
                    <span>499</span>
                </li>
            </ul>

            <Separator className="my-2"/>

            <ul className="grid gap-2 text-sm">
                <li className="flex items-center justify-between">
                    <span className="font-semibold my-2">Total:</span>
                    <span>2342</span>
                </li>
            </ul>

        </CardContent>
        <CardFooter className="border-t bg-muted/50 p-4">
            <div className="text-xs text-muted-foreground">
                Updated <time dateTime="2023-09-12">September 12, 2023</time>
            </div>
            <Pagination className="w-auto">
                <PaginationContent>
                    <PaginationItem>
                        <Button size="icon" variant="outline" className="h-6 w-6">
                            <ChevronLeft className="h-3.5 w-3.5" />
                            <span className="sr-only">Previous Order</span>
                        </Button>
                    </PaginationItem>
                    <PaginationItem>
                        <Button size="icon" variant="outline" className="h-6 w-6">
                            <ChevronRight className="h-3.5 w-3.5" />
                            <span className="sr-only">Next Order</span>
                        </Button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </CardFooter>
    </Card>
  )
}

export default RecentOrderCard