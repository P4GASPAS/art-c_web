import Image from "next/image"
import path from "@/public/logos/path.json"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { CircleUser, Menu, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => {

    
  return (
    <div className="bg-primary-foreground flex justify-between px-2 lg:px-12 items-center py-4 font-semibold">
        <div className="flex gap-16 items-center">
            <Image
                src={path["art-c"]}
                alt="Logo image"
                height={45}
                width={45}
                className="hidden lg:block"
            />
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 lg:hidden"
                    >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <VisuallyHidden.Root>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>Menu for side nav</SheetDescription>
                    </VisuallyHidden.Root>
                    <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                    >
                        <Image
                            src={path["art-c"]}
                            alt="art-c logo"
                            height={48}
                            width={48}
                            className=""
                        />
                    </Link>
                    <Link href="#" className="hover:text-foreground">
                        Products
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        Appointments
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        Messages
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        About
                    </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <ul className="hidden lg:flex gap-12">
                <li>Products</li>
                <li>Appointments</li>
                <li>Messages</li>
                <li>About</li>
            </ul>
        </div>
        <div className="flex gap-4 lg:gap-8 items-center">
            <ShoppingCart className="h-5 w-5" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar