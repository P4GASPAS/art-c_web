import { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import path from "@/public/logos/path.json"
import { CircleUser } from "lucide-react"

const MessageLayout = ({ children }: {children: ReactNode}) => {

  return (
    <div className="grid grid-cols-12 gap-2">
    <div className="col-span-3 border-r-[1px] border-black">
        <h1 className="text-2xl font-semibold px-4 pt-4">Messages</h1>
        <ScrollArea className="">
        
        <Link href={''} className="flex gap-2 m-2 hover:bg-gray-400 p-2 rounded-lg">
            <Image
            src={path["art-c"]}
            alt="user profile"
            height={4}
            width={32}
            className="object-center"
            />
            <span>
            <h1 className="font-medium">John Cena</h1>
            <p className="text-sm">How much for your ...</p>
            </span>
        </Link>

        <Link href={''} className="flex gap-2 m-2 hover:bg-gray-400 p-2 rounded-lg">
            <Image
            src={path["art-c"]}
            alt="user profile"
            height={4}
            width={32}
            className="object-center"
            />
            <span>
            <h1 className="font-medium">John Cena</h1>
            <p className="text-sm">How much for your ...</p>
            </span>
        </Link>

        <Link href={''} className="flex gap-2 m-2 hover:bg-gray-400 p-2 rounded-lg">
            <Image
            src={path["art-c"]}
            alt="user profile"
            height={4}
            width={32}
            className="object-center"
            />
            <span>
            <h1 className="font-medium">John Cena</h1>
            <p className="text-sm">How much for your ...</p>
            </span>
        </Link>

        <Link href={''} className="flex gap-2 m-2 hover:bg-gray-400 p-2 rounded-lg">
            <Image
            src={path["art-c"]}
            alt="user profile"
            height={4}
            width={32}
            className="object-center"
            />
            <span>
            <h1 className="font-medium">John Cena</h1>
            <p className="text-sm">How much for your ...</p>
            </span>
        </Link>

        <Link href={''} className="flex gap-2 m-2 hover:bg-gray-400 p-2 rounded-lg">
            <Image
            src={path["art-c"]}
            alt="user profile"
            height={4}
            width={32}
            className="object-center"
            />
            <span>
            <h1 className="font-medium">John Cena</h1>
            <p className="text-sm">How much for your ...</p>
            </span>
        </Link>

        <Link href={''} className="flex gap-2 m-2 hover:bg-gray-400 p-2 rounded-lg">
            <Image
            src={path["art-c"]}
            alt="user profile"
            height={4}
            width={32}
            className="object-center"
            />
            <span>
            <h1 className="font-medium">John Cena</h1>
            <p className="text-sm">How much for your ...</p>
            </span>
        </Link>
        </ScrollArea>
    </div>
    <div className="col-span-9">
        {children}
    </div>
    </div>
  )
}

export default MessageLayout