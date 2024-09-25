import Image from "next/image"
import path from "@/public/images/LandingStoryImages/path.json"

const Hero = () => {


  return (
    <div className="h-[60%] text-black grid grid-cols-12 gap-4 items-center p-2">
      <div className="col-span-6 text-center p-14">
        <h1 className="text-4xl font-semibold m-4">Performance Parts, Trusted Service</h1>
        <p className="tracking-wide">Elevate your motorcycle with a performance-driven setup designed for durability, superior braking, enhanced stability, and efficient cooling, ensuring you're ready for any challenge on the road or track.</p>
      </div>
      <div className="col-span-6 flex justify-center">
        <Image
          src={path.landing_story1}
          alt="art-c image"
          height={680}
          width={680}
          className="object-contain rounded-xl shadow"
        />
      </div>
    </div>
  )
}

export default Hero