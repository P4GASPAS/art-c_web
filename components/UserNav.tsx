import Image from "next/image"
import Link from "next/link"
import path from "@/public/logos/path.json"
import { Input } from "@/components/ui/input"
import { CircleUser, Menu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

const UserNav = () => {
  return (
    <nav className="bg-primary-foreground shadow flex justify-around items-center gap-4 py-3 px-2 md:px-0 border-b-[1px] border-black">

        <div className="flex items-center gap-2">
            <Image
                src={path["art-c"]}
                alt="art-c logo"
                height={48}
                width={48}
                className="hidden lg:block"
            />
            <h1 className="font-semibold hidden lg:block text-lg">ART-C</h1>
        </div>

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
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Input className="w-[30vh] md:w-[80vh] h-10 shadow-lg" placeholder="Search product" />

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full shadow">
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

    </nav>
  )
}

export default UserNav