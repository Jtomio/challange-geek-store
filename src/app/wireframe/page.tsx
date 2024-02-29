import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'
import WireframeDesktopImg from '../../../public/assets/Image-wireframe-desktop.png'
import WireframeMobileImg from '../../../public/assets/Image-wireframe-mobile.png'
import Image from 'next/image'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">Wireframe do Desafio</h1>
      <div className="grid w-full grid-cols-1 justify-center gap-4 lg:grid-cols-2">
        <Card className="flex flex-col items-center justify-start p-6">
          <CardTitle className="p-2">Desktop Layout</CardTitle>
          <CardDescription>
            <Image
              src={WireframeDesktopImg}
              width={500}
              alt="wireframe desktop image"
            />
          </CardDescription>
        </Card>
        <Card className="flex w-full flex-col items-center justify-start p-6">
          <CardTitle className="p-2">Mobile Layout</CardTitle>
          <CardDescription>
            <Image
              src={WireframeMobileImg}
              width={300}
              alt="wireframe mobile image"
            />
          </CardDescription>
        </Card>
      </div>
    </div>
  )
}
