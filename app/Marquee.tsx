import path from '@/public/logos/motor_brands/path.json'
import Image from 'next/image'

const Marquee = () => {
  return (
    <div className='flex overflow-x-hidden space-x-40 group py-2'>
    <div className='flex space-x-40 whitespace-nowrap animate-marquee group-hover:paused'>
        <Image className='max-w-none' src={path.chevrolet_logo} alt='java' height={48} width={48} />
        <Image className='max-w-none' src={path.ford_logo} alt='laravel' height={48} width={48} />
        <Image className='max-w-none' src={path.honda_logo} alt='mysql' height={48} width={48} />
        <Image className='max-w-none' src={path.isuzu_logo} alt='nextjs' height={48} width={48} />
        <Image className='max-w-none' src={path.kawasaki_logo} alt='tensorflow' height={48} width={48} />
        <Image className='max-w-none' src={path.mitsubishi_logo} alt='aws' height={48} width={48} />
        <Image className='max-w-none' src={path.nissan_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.suzuki_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.toyota_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.yamaha_logo} alt='docker' height={48} width={48} />
    </div>
    <div className='flex space-x-40 whitespace-nowrap animate-marquee group-hover:paused' aria-hidden="true">
        <Image className='max-w-none' src={path.chevrolet_logo} alt='java' height={48} width={48} />
        <Image className='max-w-none' src={path.ford_logo} alt='laravel' height={48} width={48} />
        <Image className='max-w-none' src={path.honda_logo} alt='mysql' height={48} width={48} />
        <Image className='max-w-none' src={path.isuzu_logo} alt='nextjs' height={48} width={48} />
        <Image className='max-w-none' src={path.kawasaki_logo} alt='tensorflow' height={48} width={48} />
        <Image className='max-w-none' src={path.mitsubishi_logo} alt='aws' height={48} width={48} />
        <Image className='max-w-none' src={path.nissan_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.suzuki_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.toyota_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.yamaha_logo} alt='docker' height={48} width={48} />
    </div>
    <div className='flex space-x-40 whitespace-nowrap animate-marquee group-hover:paused' aria-hidden="true">
        <Image className='max-w-none' src={path.chevrolet_logo} alt='java' height={48} width={48} />
        <Image className='max-w-none' src={path.ford_logo} alt='laravel' height={48} width={48} />
        <Image className='max-w-none' src={path.honda_logo} alt='mysql' height={48} width={48} />
        <Image className='max-w-none' src={path.isuzu_logo} alt='nextjs' height={48} width={48} />
        <Image className='max-w-none' src={path.kawasaki_logo} alt='tensorflow' height={48} width={48} />
        <Image className='max-w-none' src={path.mitsubishi_logo} alt='aws' height={48} width={48} />
        <Image className='max-w-none' src={path.nissan_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.suzuki_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.toyota_logo} alt='docker' height={48} width={48} />
        <Image className='max-w-none' src={path.yamaha_logo} alt='docker' height={48} width={48} />
    </div>
    </div>
  )
}

export default Marquee