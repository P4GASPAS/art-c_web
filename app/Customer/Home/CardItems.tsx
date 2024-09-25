import Image from "next/image"
import path from "@/public/images/LandingCardImages/path.json"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const CardItems = () => {
  return (
    <>
      <div className="text-center px-24 pb-8">
          <h1 className="text-2xl font-semibold my-4">Top products</h1>
          <p className="text-sm tracking-wider">Elevate your motorcycle with a performance-driven setup designed for durability, superior braking, enhanced stability, and efficient cooling, ensuring you're ready for any challenge on the road or track.</p>
      </div>
      <div className="grid grid-cols-12 gap-4 m-4">
        
        <Card className="col-span-3 rounded-lg shadow-xl">
            <CardHeader className="p-0 items-center">
                <Image
                    src={path.landing_card1}
                    alt="Card image"
                    height={240}
                    width={380}
                    className="object-fill h-[320px] rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="py-2">
                <CardTitle className="py-2">R15 MALAYSIAN CRANKCASE COVER FOR SNIPER 150</CardTitle>
                <CardDescription className="py-2">The R15 Malaysian Crankcase Cover for the Sniper 150 combines durability with sleek design, enhancing both performance and style.</CardDescription>
            </CardContent>
            <CardFooter>Buy now</CardFooter>
        </Card>

        <Card className="col-span-3 rounded-lg shadow-xl">
            <CardHeader className="p-0 items-center">
                <Image
                    src={path.landing_card2}
                    alt="Card image"
                    height={240}
                    width={380}
                    className="object-fill h-[320px] rounded-t-lg w-full"
                />
            </CardHeader>
            <CardContent className="py-2">
                <CardTitle className="py-2">Kingdrag Rear Disc 200mm</CardTitle>
                <CardDescription className="py-2">The Kingdrag Rear Disc 200mm for sniper 150/155 crafted performance enthusiast, it enhances both control and the aggressive look of your ride.</CardDescription>
            </CardContent>
            <CardFooter>Buy now</CardFooter>
        </Card>

        <Card className="col-span-3 rounded-lg shadow-xl">
            <CardHeader className="p-0 items-center">
                <Image
                    src={path.landing_card3}
                    alt="Card image"
                    height={240}
                    width={380}
                    className="object-fill h-[320px] rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="py-2">
                <CardTitle className="py-2">Swing Arm +2 KINGKDRAG</CardTitle>
                <CardDescription className="py-2">For Sniper 150/155 offers enhanced stability, lightweight design. Built for high-performance riding, it provides extended control and a sleek upgrade to your motorcycle.</CardDescription>
            </CardContent>
            <CardFooter>Buy now</CardFooter>
        </Card>

        <Card className="col-span-3 rounded-lg shadow-xl">
            <CardHeader className="p-0 items-center">
                <Image
                    src={path.landing_card4}
                    alt="Card image"
                    height={240}
                    width={380}
                    className="object-fill h-[320px] rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="py-2">
                <CardTitle className="py-2">RADIATOR DUAL FAN ATAKA RACING FOR SNIPER 155</CardTitle>
                <CardDescription className="py-2">The Ataka Racing dual fan radiator for Sniper 155 offers enhanced cooling efficiency with its dual high-speed fans and durable construction.</CardDescription>
            </CardContent>
            <CardFooter>Buy now</CardFooter>
        </Card>

      </div>
    </>
  )
}

export default CardItems