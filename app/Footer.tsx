import Image from "next/image"
import path from "@/public/logos/path.json"

const Footer = () => {
  return (
    <div className="text-center md:mx-32 lg:mx-68 xl:mx-80 p-4">
        <ul className="grid grid-cols-12 justify-center text-sm gap-4">
            <li className="col-span-6 md:col-span-2">About</li>
            <li className="col-span-6 md:col-span-2">Blog</li>
            <li className="col-span-6 md:col-span-2">Jobs</li>
            <li className="col-span-6 md:col-span-2">Press</li>
            <li className="col-span-6 md:col-span-2">Accessibility</li>
            <li className="col-span-6 md:col-span-2">Partners</li>
        </ul>
        <div className="flex gap-4 justify-center my-6">
            <Image
                src={path["art-c"]}
                alt="art-c logo"
                height={32}
                width={32}
                className=""
            />
            <Image
                src={path["art-c"]}
                alt="art-c logo"
                height={32}
                width={32}
                className=""
            />
            <Image
                src={path["art-c"]}
                alt="art-c logo"
                height={32}
                width={32}
                className=""
            />
            <Image
                src={path["art-c"]}
                alt="art-c logo"
                height={32}
                width={32}
                className=""
            />
            <Image
                src={path["art-c"]}
                alt="art-c logo"
                height={32}
                width={32}
                className=""
            />
        </div>
        <p className="text-sm">© 2020 Your Company, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer