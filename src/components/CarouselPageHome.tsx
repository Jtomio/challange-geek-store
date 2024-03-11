'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import image1 from '../../public/assets/hero-funko.jpg'
import image2 from '../../public/assets/hero-action-figure.jpg'
import image3 from '../../public/assets/hero-keychain.jpg'
import image4 from '../../public/assets/hero-lego.png'
import image5 from '../../public/assets/hero-quadros.jpg'
import Autoplay from 'embla-carousel-autoplay'

const Items = [
  {
    id: '1',
    category: 'Funko Pop',
    image: image1,
  },
  {
    id: '2',
    category: 'Action figure',
    image: image2,
  },
  {
    id: '3',
    category: 'Chaveiros',
    image: image3,
  },
  {
    id: '4',
    category: 'Lego',
    image: image4,
  },
  {
    id: '5',
    category: 'Quadros',
    image: image5,
  },
]

export function CarouselPageHome() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm lg:max-w-xl"
    >
      <CarouselContent>
        {Items.map((i) => (
          <CarouselItem key={i.id} className="group md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src={i.image}
                    alt="image"
                    width={500}
                    className="object-fill"
                  />
                  <span className="sr-only">{i.category}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50">
                    <span className="hidden text-xl font-semibold text-white group-hover:block">
                      {i.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
