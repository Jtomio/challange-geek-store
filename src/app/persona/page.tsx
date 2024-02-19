import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { ToggleGroupDemo } from './components/ToggleGroup'
import DescriptionContent from './components/DescriptionContent'
import { Card } from '@/components/ui/card'

export default function page() {
  return (
    <Card className="mb-6">
      <div className="relative flex-col items-center justify-center rounded-md lg:grid lg:grid-cols-4">
        <div className="col-span-1 border-primary bg-primary-foreground py-4 lg:h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full bg-primary p-1">
              <div className="rounded-full bg-white p-1">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    width="50em"
                    className=""
                  />
                  <AvatarFallback>Na</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-2">
              <div className="">
                <h1 className="text-xl font-semibold text-primary">Natan</h1>
                <p className="text-muted-foreground">Cliente</p>
              </div>
              <div className="">
                <h1 className="text-xl font-semibold text-primary">Idade</h1>
                <p className="text-muted-foreground">28 anos</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="py-2 text-xl font-semibold text-primary">
                  Redes Sociais
                </h1>
                <ToggleGroupDemo />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex h-full flex-col items-center justify-start px-2">
          <DescriptionContent />
        </div>
      </div>
    </Card>
  )
}
