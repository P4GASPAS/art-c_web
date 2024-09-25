import path from "@/public/logos/path.json"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const HomeCarousel = () => {

  const tests = [1, 2, 3, 4, 5]

  return (
    <div className="flex justify-center">
      <Carousel className="w-[92%]">
        <CarouselContent>
          {tests.map((test) => (
            <CarouselItem key={test} className="flex justify-center">
              <Image
                src={path["art-c"]}
                alt="logo image"
                height={420}
                width={420}
                className="p-2 object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default HomeCarousel