import Image from "next/image"
import path from "@/public/images/path.json"
import { TextGenerateEffect } from "@/components/aceternity_ui/text-generate-effect"

const AboutUs = () => {

    const words = "At ART-C Motorcycle Parts, Accessories & Repair Shop, we specialize in high-quality motor parts, accessories, and maintenance services for motorcycles. Established in 2022, we are committed to delivering exceptional service and affordable solutions, earning the trust of our customers in Davao City."

  return (
    <div className="grid grid-cols-12 gap-8 items-center m-8">
        <div className="col-span-6 text-center px-20 py-8">
            <h1 className="text-4xl font-semibold mb-12">About us</h1>
            <TextGenerateEffect duration={2} filter={false} words={words}/>
        </div>
        <div className="hidden lg:flex justify-center lg:col-span-6">
            <Image
                src={path.landing_about_image}
                alt="about us image"
                height={680}
                width={680}
                className="object-contain object-center rounded-lg"
            />
        </div>
    </div>
  )
}

export default AboutUs